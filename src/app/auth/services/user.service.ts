import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '../../login/login.component';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = '/auth';

  constructor(private httpClient: HttpClient) {
  }

  fetchUser(val: { user: string, password: string }): Observable<User> {
    return this.httpClient.get<User>(`´${this.url}`, {
      params: {
        user: val.user,
        password: val.password
      }
    });
  }
}
