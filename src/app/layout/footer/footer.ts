import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Footer {
  readonly year = new Date().getFullYear();
  readonly email = signal('');
  readonly subscribed = signal(false);

  subscribe(): void {
    if (this.email().includes('@')) {
      this.subscribed.set(true);
    }
  }
}
