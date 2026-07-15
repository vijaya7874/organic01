import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductService } from '../../core/services/product.service';
import { ProductCard } from '../../shared/components/product-card/product-card';
import { RevealDirective } from '../../shared/directives/reveal.directive';

interface Value {
  icon: string;
  title: string;
  body: string;
}

@Component({
  selector: 'app-home',
  imports: [RouterLink, ProductCard, RevealDirective],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {
  private readonly products = inject(ProductService);
  readonly bestSellers = this.products.bestSellers();

  readonly values: Value[] = [
    { icon: 'sprout', title: 'Naturally Sourced', body: 'Sourced from trusted farms following natural growing practices.' },
    { icon: 'flask', title: 'Quality Processing', body: 'Prepared in small, controlled batches with strict hygiene.' },
    { icon: 'ban', title: 'Nothing Unnecessary', body: 'No added colours, sugar, preservatives, or artificial flavours.' },
    { icon: 'heart', title: 'Thoughtfully Made', body: 'Gentle, low-heat processing to retain taste, aroma and nutrition.' },
  ];

  path(icon: string): string {
    const p: Record<string, string> = {
      sprout: 'M12 20v-8m0 0c0-3-2-5-5-5 0 3 2 5 5 5Zm0 0c0-3 2-5 5-5 0 3-2 5-5 5Z',
      flask: 'M9 3h6M10 3v6l-4 8a2 2 0 0 0 2 3h8a2 2 0 0 0 2-3l-4-8V3M7.5 15h9',
      ban: 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm-6 6 12 12',
      heart: 'M12 20s-7-4.5-7-9.5A3.5 3.5 0 0 1 12 8a3.5 3.5 0 0 1 7 2.5C19 15.5 12 20 12 20Z',
    };
    return p[icon] ?? p['heart'];
  }
}
