import {
  Component,
  inject,
  signal,
  computed,
  ChangeDetectionStrategy,
} from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DecimalPipe } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { ProductService } from '../../core/services/product.service';
import { CartService } from '../../core/services/cart.service';
import { Jar } from '../../shared/components/jar/jar';
import { InfographicCard } from '../../shared/components/infographic/infographic';
import { ProductCard } from '../../shared/components/product-card/product-card';
import { Product } from '../../core/models/product.model';

type View = 'jar' | 'facts' | 'info' | 'use';

@Component({
  selector: 'app-product',
  imports: [RouterLink, DecimalPipe, Jar, InfographicCard, ProductCard],
  templateUrl: './product.html',
  styleUrl: './product.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductPage {
  private readonly route = inject(ActivatedRoute);
  private readonly products = inject(ProductService);
  private readonly cart = inject(CartService);

  private readonly slug = toSignal(
    this.route.paramMap.pipe(map((p) => p.get('slug') ?? '')),
    { initialValue: '' }
  );

  readonly product = computed(() => this.products.bySlug(this.slug()));
  readonly related = computed(() => {
    const p = this.product();
    return p ? this.products.related(p.id, 4) : [];
  });

  readonly view = signal<View>('jar');
  readonly variant = signal('');
  readonly qty = signal(1);
  readonly openTab = signal<'details' | 'use' | 'delivery' | null>('details');

  readonly views: { id: View; label: string }[] = [
    { id: 'jar', label: 'Jar' },
    { id: 'facts', label: 'Nutrition' },
    { id: 'info', label: 'Benefits' },
    { id: 'use', label: 'How to use' },
  ];

  readonly off = computed(() => {
    const p = this.product();
    return p && p.mrp > p.price ? Math.round(((p.mrp - p.price) / p.mrp) * 100) : 0;
  });

  readonly activeVariant = computed(() => this.variant() || this.product()?.variants[0] || '');

  more(): void {
    this.qty.update((q) => Math.min(20, q + 1));
  }

  fewer(): void {
    this.qty.update((q) => Math.max(1, q - 1));
  }

  toggleTab(tab: 'details' | 'use' | 'delivery'): void {
    this.openTab.update((cur) => (cur === tab ? null : tab));
  }

  addToCart(p: Product): void {
    this.cart.add(p, this.activeVariant(), this.qty());
  }
}
