import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { map, Observable, of } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { Pages } from '../utils/routes';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, NavbarComponent, AsyncPipe],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'radar-front';
  public isLoginOrSignUPRoute$: Observable<boolean> = of(false);
  constructor(private router: Router) {
    this.isLoginOrSignUPRoute$ = this.router.events.pipe(
      map(
        () =>
          this.router.url.includes(Pages.Login) ||
          this.router.url.includes(Pages.SignUp),
      ),
    );
  }
}
