import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Modelinputemail } from 'src/app/reusable/inputemail/modelinputemail';
import { Modelinputpassword } from 'src/app/reusable/inputpassword/modelinputpassword';
import { AuthService } from 'src/app/reusable/connexion/services/auth/auth.service';
import { email1, password1 } from './configuration';
import { GlobalService } from 'src/app/services/global/global.service';

@Component( {
  selector: 'signup',
  templateUrl: './signup.component.html'
} )
export class SignupComponent implements OnInit
{
  email: Modelinputemail = new Modelinputemail(email1);
  password: Modelinputpassword = new Modelinputpassword(password1);

  constructor (
    public auth: AuthService,
    public global_service: GlobalService,
    public router: Router
  )
  {
  }

  ngOnInit (): void
  {

  }

  signup ()
  {
    this.email.a.premieressai = true;
    this.password.a.premieressai = true;

    if ( this.email.a.validity && this.password.a.validity )
    {
      this.global_service.spinneron();
      if ( this.email.a.input && this.password.a.input )
        this.auth
          .signUp( this.email.a.input, this.password.a.input )
          .subscribe(
            result =>
            {
              this.global_service.activelogin = 'confirmsignup';
              this.global_service.spinneroff();
            },
            error =>
            {
              //console.log( 'error' + JSON.stringify( error ) );
              this.global_service.errorstatus = 'on';
              this.global_service.spinneroff();
            }
          );

    };
  };

}
