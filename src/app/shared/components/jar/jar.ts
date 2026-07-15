import { Component, ChangeDetectionStrategy, computed, input } from '@angular/core';

@Component({
  selector: 'app-jar',
  templateUrl: './jar.html',
  styleUrls: ['./jar.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Jar {

  readonly tone = input.required<string>();

  readonly fill = input(0.72);

  readonly key = input('');

  readonly TOP = 90;
  readonly BOTTOM = 300;

  readonly surfaceY = computed(() =>
    this.BOTTOM -
    (this.BOTTOM - this.TOP) *
    Math.max(0, Math.min(1, this.fill()))
  );


  readonly powderPath = computed(() => {

    const y = this.surfaceY();

    return `
    M78 ${y}

    C92 ${y - 10}
    106 ${y - 4}
    120 ${y - 18}

    C132 ${y - 34}
    148 ${y - 34}
    160 ${y - 18}

    C170 ${y - 6}
    176 ${y - 6}
    182 ${y}

    L182 314
    L78 314
    Z
  `;
  });

  readonly powderHighlight = computed(() => {

    const y = this.surfaceY();

    return `
    M92 ${y - 4}

    C112 ${y - 18}
    148 ${y - 18}
    168 ${y - 4}
  `;
  });
}