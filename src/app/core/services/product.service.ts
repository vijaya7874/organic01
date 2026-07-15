import { Injectable, signal, computed } from '@angular/core';
import { Product } from '../models/product.model';

/** Catalogue, prices, and infographic content for MR Organics. */
@Injectable({ providedIn: 'root' })
export class ProductService {
  private readonly _all = signal<Product[]>([
    {
      id: 'moringa',
      slug: 'moringa-powder',
      name: 'Moringa Powder',
      title: 'Moringa Powder 100g / 200g | Pure & Natural Miracle Tree Superfood',
      blurb:
        'Rich in vitamins A, C and E, antioxidants, and complete plant protein — from the leaf of the miracle tree.',
      price: 199,
      mrp: 199,
      weight: '100g / 200g',
      variants: ['100g', '200g'],
      rating: 4.8,
      reviews: 214,
      badge: 'Best Seller',
      tone: '#3F7A4B',
      wash: '#EAF1E7',
      emoji: '🌿',
      category: 'powder',
      infographic: {
        title: 'A Spoonful of Superpower',
        lines: [
          { figure: '17x', label: 'Calcium than Milk' },
          { figure: '9x', label: 'Vitamin A than Carrots' },
          { figure: '3x', label: 'Potassium than Bananas' },
          { figure: '4x', label: 'Vitamin C than Oranges' },
        ],
        footnote: 'Complete plant protein · gram for gram',
      },
      about:
        'Moringa asks for almost nothing — poor soil, little water — and gives back a leaf dense with iron, calcium and complete plant protein. Ours is dried below 45°C so the green, and the nutrition, survive the process.',
      howToUse: [
        'One teaspoon in warm water or a smoothie, twice daily.',
        'Stir into buttermilk, dal, or soup just before serving.',
        'Start once a day for the first week, then build up.',
      ],
      facts: [
        { figure: '10x', label: 'Vitamin A than carrots' },
        { figure: '15x', label: 'Potassium than bananas' },
        { figure: '25%', label: 'Plant protein by weight' },
      ],
    },
    {
      id: 'amla',
      slug: 'amla-powder',
      name: 'Amla Powder',
      title: 'Amla Powder 200g | Pure & Natural Indian Gooseberry',
      blurb:
        'One of nature’s richest sources of Vitamin C. Sun-dried whole, never sweetened, for skin, hair and gut.',
      price: 275.54,
      mrp: 599,
      weight: '200g',
      variants: ['200g'],
      rating: 4.7,
      reviews: 168,
      badge: null,
      tone: '#B8894A',
      wash: '#F3ECDD',
      emoji: '🟡',
      category: 'powder',
      infographic: {
        title: 'The Vitamin C Powerhouse',
        lines: [
          { figure: '20x', label: 'Vitamin C than Oranges' },
          { figure: '100%', label: 'Whole fruit, nothing added' },
          { figure: '★', label: 'Skin & hair support' },
        ],
        footnote: 'Sun-dried · sour by nature',
      },
      about:
        'Picked at peak tartness, dried whole with the stone removed, then milled. Nothing is added to soften what it does to your tongue — that sourness is the Vitamin C talking.',
      howToUse: [
        'Half a teaspoon in warm water, first thing, on an empty stomach.',
        'Mix into hair masks or face packs for a topical boost.',
        'Follow with honey if the sourness is too much at first.',
      ],
      facts: [
        { figure: '20x', label: 'Vitamin C than oranges' },
        { figure: '0g', label: 'Added sugar' },
        { figure: '1', label: 'Ingredient, whole fruit' },
      ],
    },
    {
      id: 'abc',
      slug: 'abc-powder',
      name: 'ABC Powder',
      title: 'ABC Powder (Apple, Beetroot & Carrot) 200g | Natural Superfood Mix',
      blurb:
        'Apple, beetroot and carrot — the juice bar classic, dehydrated. Natural stamina and a glowing complexion.',
      price: 499,
      mrp: 599,
      weight: '200g',
      variants: ['200g'],
      rating: 4.9,
      reviews: 302,
      badge: 'Best Seller',
      tone: '#C56A3E',
      wash: '#F5E7DD',
      emoji: '🥕',
      category: 'powder',
      infographic: {
        title: 'Three Plants, One Scoop',
        lines: [
          { figure: '3-in-1', label: 'Apple · Beetroot · Carrot' },
          { figure: '★', label: 'Natural stamina' },
          { figure: '★', label: 'Glowing skin' },
        ],
        footnote: 'How to use: 2 tsp in water or milk, daily',
      },
      about:
        'The three that every juice stall in the country puts through the same machine. We dry them instead, so you can drink it in January — sweet enough that nobody argues.',
      howToUse: [
        'Two teaspoons blended into water or milk, once a day.',
        'Add to morning smoothies for natural sweetness.',
        'Best taken before activity for a stamina lift.',
      ],
      facts: [
        { figure: '3', label: 'Whole fruits & roots' },
        { figure: '0g', label: 'Added sugar' },
        { figure: '★', label: 'Kid-approved taste' },
      ],
    },
    {
      id: 'beetroot',
      slug: 'beetroot-powder',
      name: 'Beetroot Powder',
      title: 'Beetroot Powder 200g | 100% Natural Dehydrated Beetroot',
      blurb:
        'Whole roots, skin on, dried until they snap. Iron, oxygenation and muscle endurance — no colour added.',
      price: 249,
      mrp: 299,
      weight: '200g',
      variants: ['200g'],
      rating: 4.6,
      reviews: 141,
      badge: 'New Arrival',
      tone: '#9C3D6B',
      wash: '#F1E3EC',
      emoji: '🍠',
      category: 'powder',
      infographic: {
        title: 'Deep Red Endurance',
        lines: [
          { figure: 'Fe', label: 'Rich in natural iron' },
          { figure: '↑', label: 'Oxygen to muscles' },
          { figure: '★', label: 'Endurance & stamina' },
        ],
        footnote: 'Whole root · skin on · no dye',
      },
      about:
        'Whole beets, skin on, dried until they snap when you break them. The colour you see is the beet. There is nothing else in the jar, and it will stain everything it touches.',
      howToUse: [
        'A teaspoon in water before a workout.',
        'Stir into dough for naturally pink rotis.',
        'Blend into pre-run smoothies for endurance.',
      ],
      facts: [
        { figure: '↑', label: 'Nitric oxide support' },
        { figure: '1', label: 'Whole root, nothing else' },
        { figure: '0', label: 'Added colour' },
      ],
    },
    {
      id: 'ashwagandha',
      slug: 'ashwagandha-powder',
      name: 'Ashwagandha Powder',
      title: 'Ashwagandha Powder 170g | Pure Root Powder, No Additives',
      blurb:
        'Root only — no leaf, no filler. The adaptogen for calm focus and better sleep, done properly.',
      price: 259,
      mrp: 349,
      weight: '170g',
      variants: ['170g'],
      rating: 4.8,
      reviews: 189,
      badge: null,
      tone: '#8D6E4F',
      wash: '#EFE8DF',
      emoji: '🌰',
      category: 'powder',
      infographic: {
        title: 'Root, and Nothing Else',
        lines: [
          { figure: '100%', label: 'Root, zero leaf' },
          { figure: '☾', label: 'Calm & better sleep' },
          { figure: '3 wk', label: 'Give it time to work' },
        ],
        footnote: 'Adaptogen · pure root',
      },
      about:
        'Roots pulled once the plant has finished its work. Washed, dried, milled. Cheaper powders bulk this out with leaf — ours does not. Give it three weeks before you judge it.',
      howToUse: [
        'Half a teaspoon in warm milk before bed.',
        'Add a pinch of honey or cinnamon to taste.',
        'Take nightly and consistently for three weeks.',
      ],
      facts: [
        { figure: '100%', label: 'Root, no leaf' },
        { figure: '0', label: 'Fillers' },
        { figure: '☾', label: 'Calm, focus, sleep' },
      ],
    },
    {
      id: 'chilli',
      slug: 'guntur-chilli-powder',
      name: 'Guntur Chilli Powder',
      title: 'Guntur Chilli Powder 400g | Direct-Sourced, Sun-Dried',
      blurb:
        'The heat this district is known for. Sun-dried, direct-sourced, nothing dyed — pure fire and flavour.',
      price: 239,
      mrp: 269,
      weight: '400g',
      variants: ['400g'],
      rating: 4.7,
      reviews: 96,
      badge: 'Spices',
      tone: '#C0392B',
      wash: '#F5E1DE',
      emoji: '🌶️',
      category: 'spice',
      infographic: {
        title: 'Guntur Heat, Undiluted',
        lines: [
          { figure: '🔥🔥🔥', label: 'High capsaicin heat' },
          { figure: '100%', label: 'Direct-sourced purity' },
          { figure: '0', label: 'Added colour' },
        ],
        footnote: 'Sun-dried in Guntur',
      },
      about:
        'From the fields around Guntur, where chilli is not an ingredient but a livelihood. Sun-dried and milled with nothing dyed or diluted. The red is the chilli.',
      howToUse: [
        'Use wherever chilli powder already goes.',
        'Start with less than you think — the heat builds.',
        'Bloom in hot oil to release full aroma.',
      ],
      facts: [
        { figure: '🔥🔥🔥', label: 'Heat intensity' },
        { figure: '100%', label: 'Direct from farmers' },
        { figure: '0', label: 'Artificial colour' },
      ],
    },
    {
      id: 'combo-beet-abc',
      slug: 'beetroot-abc-combo',
      name: 'Beetroot + ABC Combo',
      title: 'Beetroot + ABC Powder Combo | 200g Each',
      blurb: 'The two people always order together, boxed as one. Save ₹224.50.',
      price: 673.5,
      mrp: 898,
      weight: '200g each',
      variants: ['200g each'],
      rating: 4.8,
      reviews: 74,
      badge: 'Combo',
      tone: '#9A5A5E',
      wash: '#F1E6E4',
      emoji: '🎁',
      category: 'combo',
      infographic: {
        title: 'Two Reds, One Box',
        lines: [
          { figure: '2', label: 'Full-size jars' },
          { figure: '₹224', label: 'You save' },
          { figure: '✓', label: 'Free shipping' },
        ],
        footnote: 'Beetroot before movement · ABC for a meal',
      },
      about:
        'The two we get asked about together, so we stopped separating them. Beetroot for endurance, ABC for everyday stamina and skin.',
      howToUse: [
        'Beetroot before you move.',
        'ABC when you skip a meal.',
        'A teaspoon of each, or one at a time.',
      ],
      facts: [
        { figure: '2', label: 'Jars, 200g each' },
        { figure: '₹224.50', label: 'Saved vs. separate' },
        { figure: '✓', label: 'Ships free' },
      ],
    },
    {
      id: 'combo-trio',
      slug: 'wellness-trio',
      name: 'Complete Wellness Trio',
      title: 'Complete Wellness Trio | Moringa + Amla + Ashwagandha, 200g Each',
      blurb: 'Morning, midday, night — a whole day covered. Our best value, save ₹179.',
      price: 939,
      mrp: 1118,
      weight: '200g each',
      variants: ['200g each'],
      rating: 4.9,
      reviews: 118,
      badge: 'Best Value',
      tone: '#3F7A4B',
      wash: '#EAF1E7',
      emoji: '🏆',
      category: 'combo',
      infographic: {
        title: 'A Full Day, Covered',
        lines: [
          { figure: '3', label: 'Full-size jars' },
          { figure: '₹179', label: 'You save' },
          { figure: '☀→☾', label: 'Morning to night' },
        ],
        footnote: 'Moringa · Amla · Ashwagandha',
      },
      about:
        'The three that cover the most ground. If you only buy one thing, buy this: moringa at sunrise, amla mid-morning, ashwagandha before bed.',
      howToUse: [
        'Moringa at sunrise, in water or a smoothie.',
        'Amla mid-morning, on an empty stomach.',
        'Ashwagandha at night, in warm milk.',
      ],
      facts: [
        { figure: '3', label: 'Jars, 200g each' },
        { figure: '₹179', label: 'Saved vs. separate' },
        { figure: '★', label: 'Best value' },
      ],
    },
    {
      id: 'combo-abc-moringa',
      slug: 'abc-moringa-duo',
      name: 'ABC + Moringa Duo',
      title: 'ABC + Moringa Power Duo | 200g Each',
      blurb: 'Sweet meets green — for anyone who wants moringa but has met moringa. Save ₹320.',
      price: 878,
      mrp: 1198,
      weight: '200g each',
      variants: ['200g each'],
      rating: 4.7,
      reviews: 63,
      badge: 'Combo',
      tone: '#6E8A3F',
      wash: '#EDF0E2',
      emoji: '⚡',
      category: 'combo',
      infographic: {
        title: 'Sweet Meets Green',
        lines: [
          { figure: '2', label: 'Full-size jars' },
          { figure: '₹320', label: 'You save' },
          { figure: '✓', label: 'Free shipping' },
        ],
        footnote: 'The ABC carries the moringa',
      },
      about:
        'Moringa is good for you and tastes like it. This is the fix: half a spoon of each in one glass, and the ABC carries the moringa.',
      howToUse: [
        'Half a spoon of each, in one glass.',
        'Blend with water or milk.',
        'A gentle way into a daily moringa habit.',
      ],
      facts: [
        { figure: '2', label: 'Jars, 200g each' },
        { figure: '₹320', label: 'Saved vs. separate' },
        { figure: '✓', label: 'Ships free' },
      ],
    },
  ]);

  readonly all = this._all.asReadonly();
  readonly bestSellers = computed(() =>
    this._all().filter((p) => ['moringa', 'abc', 'amla'].includes(p.id))
  );

  bySlug(slug: string): Product | undefined {
    return this._all().find((p) => p.slug === slug);
  }

  related(id: string, n = 4): Product[] {
    return this._all().filter((p) => p.id !== id).slice(0, n);
  }
}
