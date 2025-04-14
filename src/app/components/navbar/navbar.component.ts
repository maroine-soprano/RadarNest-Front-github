import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, Routes } from '@angular/router';
import { Pages } from '../../../utils/routes';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
})
export class NavbarComponent implements OnInit {
  public pages = Pages;

  constructor() {}

  ngOnInit(): void {}
}
