import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import * as fromApi from './reducers';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromApi.apiFeatureKey, fromApi.reducers)
  ]
})
export class ApiModule {
}
