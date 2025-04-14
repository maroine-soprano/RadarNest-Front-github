import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private apollo: Apollo) {}

  getUsers(graphQLQuery: string) {
    return this.apollo
      .watchQuery({
        query: gql`
          ${graphQLQuery}
        `,
      })
      .valueChanges.pipe(map((result) => (result as any).data.dynamicQuery));
  }
}
