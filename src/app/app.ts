import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Logo } from './shared/ui/logo/logo';

@Component({
  imports: [
    RouterOutlet,
    Logo
  ],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
}
