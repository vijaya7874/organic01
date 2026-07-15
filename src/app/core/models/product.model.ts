export interface StatLine {
  /** The bold number, e.g. "17x". */
  figure: string;
  /** What it's compared against, e.g. "More Calcium Than Milk". */
  label: string;
}

export interface Infographic {
  title: string;
  lines: StatLine[];
  footnote?: string;
}

export interface Product {
  id: string;
  slug: string;
  /** Short shelf name. */
  name: string;
  /** Full listing title used on the detail page. */
  title: string;
  blurb: string;
  price: number;
  mrp: number;
  weight: string;
  variants: string[];
  rating: number;
  reviews: number;
  badge: string | null;
  /** Powder tone, drives the jar + accents. */
  tone: string;
  /** Pale wash behind the jar. */
  wash: string;
  image: string;
  emoji: string;
  category: 'powder' | 'spice' | 'combo';
  infographic: Infographic;
  /** Detail-page long copy. */
  about: string;
  howToUse: string[];
  facts: StatLine[];
}

export interface CartLine {
  product: Product;
  variant: string;
  qty: number;
}
