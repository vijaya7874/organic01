import { Component, signal, afterNextRender, DestroyRef, inject, NgZone, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.html',
  styleUrl: './announcement.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Announcement {
  private readonly zone = inject(NgZone);
  private readonly destroyRef = inject(DestroyRef);

  readonly messages = [
    '📦 Free Shipping Across India on Orders Above ₹499 →',
    '🌿 100% Natural · No Added Sugar, Colour or Preservatives',
    '🎁 Buy Any 2 Powders & Get 15% Off',
  ];

  readonly index = signal(0);

  constructor() {
    afterNextRender(() => {
      this.zone.runOutsideAngular(() => {
        const id = setInterval(() => {
          this.zone.run(() => this.index.update((i) => (i + 1) % this.messages.length));
        }, 4000);
        this.destroyRef.onDestroy(() => clearInterval(id));
      });
    });
  }
}
