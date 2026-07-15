import {
  Component,
  inject,
  signal,
  effect,
  afterNextRender,
  DestroyRef,
  NgZone,
  ChangeDetectionStrategy,
} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CartService } from '../../core/services/cart.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Header {
  readonly cart = inject(CartService);
  private readonly zone = inject(NgZone);
  private readonly destroyRef = inject(DestroyRef);

  readonly solid = signal(false);
  readonly menuOpen = signal(false);
  readonly pulse = signal(false);

  readonly links = [
    { label: 'Home', path: '/' },
    { label: 'Shop', path: '/shop' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  constructor() {
    effect(() => {
      this.cart.count();
      this.pulse.set(true);
      setTimeout(() => this.pulse.set(false), 500);
    });

    afterNextRender(() => {
      const onScroll = () => this.solid.set(window.scrollY > 20);
      onScroll();
      this.zone.runOutsideAngular(() =>
        window.addEventListener('scroll', onScroll, { passive: true })
      );
      this.destroyRef.onDestroy(() => window.removeEventListener('scroll', onScroll));
    });
  }

  toggle(): void {
    this.menuOpen.update((v) => !v);
  }

  close(): void {
    this.menuOpen.set(false);
  }
}
