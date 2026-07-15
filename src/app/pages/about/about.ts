import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RevealDirective } from '../../shared/directives/reveal.directive';

@Component({
  selector: 'app-about',
  imports: [RouterLink, RevealDirective],
  templateUrl: './about.html',
  styleUrl: './about.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class About {
  readonly founders = [
    {
      name: 'Rahul Reddy',
      role: 'Co-Founder',
      initials: 'RR',
      quote:
        'We wanted to bring nature’s purest gifts into every home — and to build a relationship with our farmers that lasts, and is fair.',
    },
    {
      name: 'Meghana Reddy',
      role: 'Co-Founder',
      initials: 'MR',
      quote:
        'This is our agricultural heritage, carried forward. Wellness should be affordable and within reach for every family, not a luxury.',
    },
  ];
}
