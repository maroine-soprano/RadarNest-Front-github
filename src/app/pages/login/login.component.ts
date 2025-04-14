import { Component } from '@angular/core';
import { Pages } from '../../../utils/routes';
import { Router, RouterLink } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AccountService } from '../../../services/account.service';

@Component({
  selector: 'app-login',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './login.component.html',
  standalone: true,
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  public pages = Pages;
  public loginForm: FormGroup;
  public isError: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private accountService: AccountService,
  ) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  public onSubmit() {
    if (this.loginForm.valid) {
      this.accountService.login(this.loginForm.value).subscribe({
        next: (response) => {
          this.isError = false;
          sessionStorage.setItem('access_token', response.access_token); // Store token
          this.router.navigate(['/' + Pages.Home]);
        },
        error: (err) => {
          this.isError = true;
        },
      });
    }
  }
}
