import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Announcement } from './layout/announcement/announcement';
import { Header } from './layout/header/header';
import { CartDrawer } from './layout/cart-drawer/cart-drawer';
import { Footer } from './layout/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Announcement, Header, CartDrawer, Footer],
  templateUrl: './app.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {}
