import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import * as fromAuth from './auth';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromAuth.authFeatureKey, fromAuth.reducers)
  ]
})
export class AuthModule {
}
