import { Component, input, inject, computed, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DecimalPipe } from '@angular/common';
import { Product } from '../../../core/models/product.model';
import { CartService } from '../../../core/services/cart.service';
import { Jar } from '../jar/jar';
import { InfographicCard } from '../infographic/infographic';

/**
 * The catalogue card. Shows the jar by default; on hover the jar fades out and
 * the nutritional infographic fades in.
 */
@Component({
  selector: 'app-product-card',
  imports: [RouterLink, DecimalPipe, Jar, InfographicCard],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCard {
  readonly product = input.required<Product>();
  private readonly cart = inject(CartService);

  readonly off = computed(() => {
    const p = this.product();
    return p.mrp > p.price ? Math.round(((p.mrp - p.price) / p.mrp) * 100) : 0;
  });

  add(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    this.cart.add(this.product());
  }
}
