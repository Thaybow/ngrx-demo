import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs/operators';
import { login } from '../auth/actions/auth-actions';
import { AuthState } from '../auth/reducers';
import { UserService } from '../auth/services/user.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

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

  // @ts-ignore
  user$: Observable<User>;

  form: FormGroup = this.fb.group({
    user: ['thib', [Validators.required]],
    password: ['test', [Validators.required]]
  });

  constructor(private fb: FormBuilder,
              private httpClient: HttpClient,
              private userService: UserService,
              private router: Router,
              private store: Store<AuthState>
  ) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.userService.fetchUser(this.form.value)
      .pipe(
        tap(user => {
          console.log(user);
          this.store.dispatch(login({user: user, form: this.form.value}));
          this.router.navigateByUrl('/users');
        })
      ).subscribe();

  }
}
