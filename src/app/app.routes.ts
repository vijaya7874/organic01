import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
    title: 'Wellora Origins — Clean & Simple Plant Nutrition',
  },
  {
    path: 'shop',
    loadComponent: () => import('./pages/shop/shop').then((m) => m.Shop),
    title: 'Shop All Products — Wellora Origins',
  },
  {
    path: 'product/:slug',
    loadComponent: () => import('./pages/product/product').then((m) => m.ProductPage),
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about').then((m) => m.About),
    title: 'Our Story — Wellora Origins',
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact').then((m) => m.Contact),
    title: 'Contact — Wellora Origins',
  },
  { path: '**', redirectTo: '' },
];
