import { Component } from '@angular/core';
import { Pages } from '../../../utils/routes';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AccountService } from '../../../services/account.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
})
export class SignUpComponent {
  public pages = Pages;
  public signUpForm: FormGroup;
  public isError: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private accountService: AccountService,
  ) {
    this.signUpForm = this.fb.group(
      {
        username: ['', [Validators.required, Validators.minLength(3)]],
        password: ['', [Validators.required, Validators.minLength(3)]],
        confirmPassword: ['', [Validators.required, Validators.minLength(3)]],
      },
      { validators: this.passwordMatchValidator },
    );
  }

  public onSubmit() {
    if (this.signUpForm.valid) {
      this.accountService.signUp(this.signUpForm.value).subscribe({
        next: () => {
          this.isError = false;
          this.router.navigate(['/' + Pages.Login]);
        },
        error: (err) => {
          this.isError = true;
        },
      });
    }
  }

  private passwordMatchValidator(
    form: FormGroup,
  ): { [key: string]: boolean } | null {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { passwordMismatch: true };
  }
}
