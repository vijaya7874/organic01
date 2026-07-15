import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { CartService } from '../../core/services/cart.service';
import { Jar } from '../../shared/components/jar/jar';

@Component({
  selector: 'app-cart-drawer',
  imports: [DecimalPipe, Jar],
  templateUrl: './cart-drawer.html',
  styleUrl: './cart-drawer.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartDrawer {
  readonly cart = inject(CartService);

  close(): void {
    this.cart.open.set(false);
  }
}
