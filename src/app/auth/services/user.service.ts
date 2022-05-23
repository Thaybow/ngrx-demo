import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '../../login/login.component';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'http://localhost:8080/api/auth';

  constructor(private httpClient: HttpClient) {
  }

  fetchUser(val: { user: string, password: string }): Observable<User> {
    return this.httpClient.post<User>(`${this.url}`, {

      user: val.user,
      password: val.password

    });
  }
}
