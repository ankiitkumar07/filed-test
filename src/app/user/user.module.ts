import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddUserComponent } from './add-user/add-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { reducer, userFeatureKey } from './store/reducer/user.reducer';
import { ShowUsersComponent } from './show-users/show-users.component';


@NgModule({
  declarations: [
    AddUserComponent,
    ShowUsersComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forFeature(userFeatureKey, reducer)
  ],
  exports: [
    AddUserComponent,
    ShowUsersComponent
  ]
})
export class UserModule { }
