import {HttpClient} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {tap} from 'rxjs/operators';
import {AuthState} from '../auth/reducers';
import {UserService} from '../auth/services/user.service';

export interface User {
  user: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  url = '/auth';

  form: FormGroup = this.fb.group({
    user: ['thib', [Validators.required]],
    password: ['test', [Validators.required]]
  });

  constructor(private fb: FormBuilder,
              private httpClient: HttpClient,
              private userService: UserService,
              private store: Store<AuthState>
  ) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    const val = this.form.value;

    this.userService.fetchUser(val)
      .pipe(
        tap(user => {

          console.log(user);

          this.store.dispatch();

        })
      );

  }
}
