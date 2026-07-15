import { Injectable, signal, computed, effect } from '@angular/core';
import { Product, CartLine } from '../models/product.model';

const KEY = 'mr_organics_cart';
const FREE_SHIP_AT = 499;

@Injectable({ providedIn: 'root' })
export class CartService {
  private readonly _lines = signal<CartLine[]>(this.load());

  /** Drawer open state. */
  readonly open = signal(false);

  readonly lines = this._lines.asReadonly();

  readonly count = computed(() => this._lines().reduce((n, l) => n + l.qty, 0));

  readonly subtotal = computed(() =>
    this._lines().reduce((n, l) => n + l.product.price * l.qty, 0)
  );

  readonly savings = computed(() =>
    this._lines().reduce((n, l) => n + (l.product.mrp - l.product.price) * l.qty, 0)
  );

  readonly freeShipReached = computed(() => this.subtotal() >= FREE_SHIP_AT);

  readonly toFreeShip = computed(() => Math.max(0, FREE_SHIP_AT - this.subtotal()));

  readonly freeShipProgress = computed(() =>
    Math.min(100, (this.subtotal() / FREE_SHIP_AT) * 100)
  );

  constructor() {
    effect(() => {
      try {
        localStorage.setItem(KEY, JSON.stringify(this._lines()));
      } catch {
        // Storage unavailable; cart lives for this session only.
      }
    });
  }

  private lineKey(product: Product, variant: string): string {
    return `${product.id}__${variant}`;
  }

  add(product: Product, variant = product.variants[0], qty = 1): void {
    const key = this.lineKey(product, variant);
    this._lines.update((lines) => {
      const hit = lines.find((l) => this.lineKey(l.product, l.variant) === key);
      return hit
        ? lines.map((l) =>
            this.lineKey(l.product, l.variant) === key ? { ...l, qty: l.qty + qty } : l
          )
        : [...lines, { product, variant, qty }];
    });
    this.open.set(true);
  }

  setQty(product: Product, variant: string, qty: number): void {
    const key = this.lineKey(product, variant);
    if (qty <= 0) {
      this.remove(product, variant);
      return;
    }
    this._lines.update((lines) =>
      lines.map((l) => (this.lineKey(l.product, l.variant) === key ? { ...l, qty } : l))
    );
  }

  remove(product: Product, variant: string): void {
    const key = this.lineKey(product, variant);
    this._lines.update((lines) =>
      lines.filter((l) => this.lineKey(l.product, l.variant) !== key)
    );
  }

  private load(): CartLine[] {
    try {
      const raw = localStorage.getItem(KEY);
      return raw ? (JSON.parse(raw) as CartLine[]) : [];
    } catch {
      return [];
    }
  }
}
