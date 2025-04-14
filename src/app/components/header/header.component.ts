import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pages } from '../../../utils/routes';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  standalone: true,
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  public logout() {
    localStorage.removeItem('access_token');
    this.router.navigate(['/' + Pages.Login]);
  }
}
