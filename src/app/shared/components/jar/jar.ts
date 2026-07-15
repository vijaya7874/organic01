import { Component, input, computed, ChangeDetectionStrategy } from '@angular/core';

/** A simple glass jar with coloured powder. Reused across the whole site. */
@Component({
  selector: 'app-jar',
  templateUrl: './jar.html',
  styleUrl: './jar.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Jar {
  readonly tone = input.required<string>();
  readonly fill = input(0.7);
  readonly key = input('a');

  private readonly TOP = 108;
  private readonly BOTTOM = 300;

  readonly surfaceY = computed(
    () => this.BOTTOM - (this.BOTTOM - this.TOP) * Math.min(1, Math.max(0, this.fill()))
  );
  readonly powderH = computed(() => this.BOTTOM - this.surfaceY());
  readonly clip = computed(() => `jarclip-${this.key()}`);
  readonly gloss = computed(() => `jargloss-${this.key()}`);
}
