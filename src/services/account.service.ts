import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Account } from '../entities/account';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  constructor(private httpClient: HttpClient) {}

  public signUp(account: Account): Observable<Account> {
    delete account.confirmPassword;
    return this.httpClient.post<Account>(
      environment.backend + 'accounts/signup',
      account,
    );
  }

  public login(account: Account): Observable<{
    access_token: string;
  }> {
    return this.httpClient.post<{
      access_token: string;
    }>(environment.backend + 'accounts/login', account);
  }
}
