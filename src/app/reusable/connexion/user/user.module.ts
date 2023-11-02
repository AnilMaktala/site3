import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { SigninComponent } from '../signin/signin.component';
import { ResendCodeComponent } from '../resendcode/resendcode.component';
import { ConfirmsignupComponent } from '../confirmsignup/confirmsignup.component';
import { Fpwd1Component } from '../fpwd1/fpwd1.component';
import { Fpwd2Component } from '../fpwd2/fpwd2.component';
import { SignupComponent } from '../signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReusableModule } from 'src/app/reusable/reusable.module';
import { GlobalService } from 'src/app/services/global/global.service';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ReusableModule,
  ],
  declarations: [
    UserComponent,
    SignupComponent,
    ConfirmsignupComponent,
    Fpwd1Component,
    Fpwd2Component,
    SigninComponent,
    ResendCodeComponent,
  ]
})
export class UserModule {}
