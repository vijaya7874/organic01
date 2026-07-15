import { Component, inject, signal, computed, ChangeDetectionStrategy } from '@angular/core';
import { ProductService } from '../../core/services/product.service';
import { ProductCard } from '../../shared/components/product-card/product-card';
import { RevealDirective } from '../../shared/directives/reveal.directive';

type Sort = 'recommended' | 'low' | 'high';

@Component({
  selector: 'app-shop',
  imports: [ProductCard, RevealDirective],
  templateUrl: './shop.html',
  styleUrl: './shop.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Shop {
  private readonly products = inject(ProductService);

  readonly sort = signal<Sort>('recommended');

  readonly sorts: { id: Sort; label: string }[] = [
    { id: 'recommended', label: 'Recommended' },
    { id: 'low', label: 'Price: Low to High' },
    { id: 'high', label: 'Price: High to Low' },
  ];

  readonly list = computed(() => {
    const items = [...this.products.all()];
    switch (this.sort()) {
      case 'low':
        return items.sort((a, b) => a.price - b.price);
      case 'high':
        return items.sort((a, b) => b.price - a.price);
      default:
        return items;
    }
  });

  onSort(value: string): void {
    this.sort.set(value as Sort);
  }
}
