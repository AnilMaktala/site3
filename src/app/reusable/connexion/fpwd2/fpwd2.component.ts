import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Modelinputemail } from 'src/app/reusable/inputemail/modelinputemail';
import { Modelinputnumber } from 'src/app/reusable/inputnumber/modelinputnumber';
import { Modelinputpassword } from 'src/app/reusable/inputpassword/modelinputpassword';
import { AuthService } from 'src/app/reusable/connexion/services/auth/auth.service';
import { code1, email1, password1 } from './configuration';
import { GlobalService } from 'src/app/services/global/global.service';

@Component( {
  selector: 'fpwd2',
  templateUrl: './fpwd2.component.html'
} )
export class Fpwd2Component implements OnInit
{
  email: Modelinputemail = new Modelinputemail(email1);
  code: Modelinputpassword = new Modelinputpassword(code1);
  password: Modelinputpassword = new Modelinputpassword(password1);

  constructor (
    public global_service: GlobalService,
    public router: Router,
    public auth: AuthService
  ) { }

  ngOnInit ()
  {

  }

  reinitialisermdp ()
  {
    this.email.a.premieressai = true;
    this.code.a.premieressai = true;
    this.password.a.premieressai = true;

    if ( this.email.a.validity && this.code.a.validity && this.password.a.validity )
    {
      this.global_service.spinneron();
      if ( this.email.a.input && this.password.a.input )
        this.auth.confirmNewPassword(
          this.email.a.input,
          this.code.a.input,
          this.password.a.input
        ).subscribe(
          result =>
          {
            this.global_service.activelogin = 'signin';
            this.global_service.spinneroff();
          },
          error =>
          {
            //console.log( 'error = ' + JSON.stringify( error ) );
            this.global_service.errorstatus = 'on';
            this.global_service.spinneroff();
          }
        );

    };
  }
}
