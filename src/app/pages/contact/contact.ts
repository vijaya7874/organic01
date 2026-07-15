import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RevealDirective } from '../../shared/directives/reveal.directive';

@Component({
  selector: 'app-contact',
  imports: [FormsModule, RevealDirective],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Contact {
  readonly name = signal('');
  readonly email = signal('');
  readonly phone = signal('');
  readonly message = signal('');
  readonly sent = signal(false);

  submit(): void {
    if (this.name() && this.email().includes('@') && this.message()) {
      this.sent.set(true);
    }
  }
}
