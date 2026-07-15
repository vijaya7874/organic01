import {
  Directive,
  ElementRef,
  inject,
  input,
  afterNextRender,
  DestroyRef,
} from '@angular/core';

/**
 * Fade + rise as the element scrolls into view, via IntersectionObserver.
 * The hidden state is added by JS (`reveal-armed`); if JS never runs, the
 * element is never hidden and simply shows.
 */
@Directive({ selector: '[appReveal]' })
export class RevealDirective {
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly destroyRef = inject(DestroyRef);

  readonly revealDelay = input(0);

  constructor() {
    afterNextRender(() => {
      const el = this.host.nativeElement;

      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return;
      }

      el.classList.add('reveal-armed');
      el.style.transitionDelay = `${this.revealDelay()}ms`;

      const io = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.classList.remove('reveal-armed');
            el.classList.add('reveal-in');
            io.disconnect();
          }
        },
        { threshold: 0.15 }
      );

      io.observe(el);
      this.destroyRef.onDestroy(() => io.disconnect());
    });
  }
}
