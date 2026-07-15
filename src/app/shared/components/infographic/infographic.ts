import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { Infographic } from '../../../core/models/product.model';

/**
 * The card revealed on product-card hover. Built as real SVG/CSS — bordered,
 * bold comparative stats like "17x More Calcium Than Milk".
 */
@Component({
  selector: 'app-infographic',
  templateUrl: './infographic.html',
  styleUrl: './infographic.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfographicCard {
  readonly data = input.required<Infographic>();
  readonly tone = input.required<string>();
}
