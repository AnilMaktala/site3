import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Modelinputemail } from 'src/app/reusable/inputemail/modelinputemail';
import { Modelinputnumber } from 'src/app/reusable/inputnumber/modelinputnumber';
import { AuthService } from 'src/app/reusable/connexion/services/auth/auth.service';
import { code1, email1 } from './configuration';
import { Modelinputpassword } from '../../inputpassword/modelinputpassword';
import { GlobalService } from 'src/app/services/global/global.service';

@Component( {
  selector: 'confirmsignup',
  templateUrl: './confirmsignup.component.html'
} )
export class ConfirmsignupComponent implements OnInit
{
  email: Modelinputemail = new Modelinputemail(email1);
  code: Modelinputpassword = new Modelinputpassword(code1);

  constructor (
    public global_service: GlobalService,
    public router: Router,
    public route: ActivatedRoute,
    public auth: AuthService
  ) { }

  ngOnInit ()
  {
  }

  confirmsignup ()
  {
    this.email.a.premieressai = true;
    this.code.a.premieressai = true;

    if ( this.email.a.validity && this.code.a.validity )
    {
      this.global_service.spinneron();
      this.auth.confirmSignUp( this.email.a.input, this.code.a.input ).subscribe(
        async result =>
        {
          this.global_service.spinneroff();
          this.global_service.activelogin = 'signin';
        },
        error =>
        {
          //console.log( 'error' );
          this.global_service.errorstatus = 'on';
          this.global_service.spinneroff();
        }
      );
    }

  }
}

