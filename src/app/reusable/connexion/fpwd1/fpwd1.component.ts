import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Modelinputemail } from 'src/app/reusable/inputemail/modelinputemail';
import { AuthService } from 'src/app/reusable/connexion/services/auth/auth.service';
import { email1 } from './configuration';
import { GlobalService } from 'src/app/services/global/global.service';

@Component( {
  selector: 'fpwd1',
  templateUrl: './fpwd1.component.html'
} )
export class Fpwd1Component implements OnInit
{
  email: Modelinputemail = new Modelinputemail(email1);

  constructor (
    public router: Router,
    public auth: AuthService,
    public global_service: GlobalService
  )
  {
  }

  ngOnInit ()
  {

  }

  demandermdp ()
  {
    this.email.a.premieressai = true;

    if ( this.email.a.validity )
    {
      this.global_service.spinneron();
      if ( this.email.a.input )
        this.auth.forgotPassword( this.email.a.input ).subscribe(
          result =>
          {
            this.global_service.activelogin = 'fpwd2';
            this.global_service.spinneroff();
          },
          error =>
          {
            //console.log( 'error' );
            this.global_service.errorstatus = 'on';
            this.global_service.spinneroff();
          }
        );

    };
  }
}
