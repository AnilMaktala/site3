import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/reusable/connexion/services/auth/auth.service';
import { Modelinputemail } from 'src/app/reusable/inputemail/modelinputemail';
import { Modelinputpassword } from 'src/app/reusable/inputpassword/modelinputpassword';
import { email1, password1 } from './configuration';
import { GlobalService } from 'src/app/services/global/global.service';
import { CookieService } from "ngx-cookie-service";

@Component({
  selector: "signin",
  templateUrl: "./signin.component.html",
})
export class SigninComponent implements OnInit {
  email: Modelinputemail = new Modelinputemail(email1);
  password: Modelinputpassword = new Modelinputpassword(password1);
  valeur: boolean = false;

  constructor(
    public router: Router,
    public global_service: GlobalService,
    public auth: AuthService,
    private cookieservice: CookieService
  ) {}

  ngOnInit() {
    //1
    if (this.cookieservice.get("ETAT") == "ON") this.valeur = true;
    //2
    if (this.cookieservice.get("ETAT") == "ON") {
      //console.log( 'ON' );
      this.signinauto();
    } else {
      //console.log( 'OFF' );
    }
  }

  signin() {
    //console.log( 'signin' );
    if (this.valeur) {
      this.cookieservice.set("ETAT", "ON", {
        expires: 365,
      });
    } else {
      this.cookieservice.set("ETAT", "OFF", {
        expires: 365,
      });
    }
    this.email.a.premieressai = false;
    this.password.a.premieressai = false;
    //console.log( 'this.email.validity = ' + this.email.a.validity );
    //console.log( 'this.password.validity = ' + this.password.a.validity );
    if (this.email.a.validity && this.password.a.validity) {
      //console.log( 'signin validity' );

      //console.log( 'this.email.input = ' + this.email.a.input );
      //console.log( 'this.password.input = ' + this.password.a.input );

      this.global_service.spinneron();
      this.auth.signIn(this.email.a.input, this.password.a.input).subscribe(
        (result) => {
          //console.log( 'signin result' );
          if (this.cookieservice.get("ETAT") == "ON") {
            if (this.email.a.input && this.password.a.input) {
              this.cookieservice.set("email", this.email.a.input, {
                expires: 365,
              });
              this.cookieservice.set("password", this.password.a.input, {
                expires: 365,
              });
            }
          }
          if (this.email.a.input)
            this.global_service.email = this.email.a.input;
          this.auth.loggedIn.next(true);
          this.auth.getCreds();
          //console.log( 'postconnexion' );
          this.router.navigate(["/postconnexion"]);
        },
        (error) => {
          //console.log( 'signin error' );
          //console.log( 'error' + JSON.stringify( error ) );
          this.global_service.errorstatus = "on";
          this.global_service.spinneroff();
        }
      );
    }
  }

  signinauto() {
    //console.log( 'signinauto' );
    this.email.a.input = this.cookieservice.get("email")!;
    this.password.a.input = this.cookieservice.get("password")!;
    this.email.a.validity = true;
    this.password.a.validity = true;

    //console.log( 'this.email.input = ' + this.email.a.input );
    //console.log( 'this.password.input = ' + this.password.a.input );

    this.global_service.spinneron();
    this.auth.signIn(this.email.a.input, this.password.a.input).subscribe(
      (result) => {
        //console.log( 'signin result' );
        if (this.email.a.input) this.global_service.email = this.email.a.input;
        this.auth.loggedIn.next(true);
        this.auth.getCreds();
        //console.log( 'postconnexion' );
        this.router.navigate(["/postconnexion"]);
      },
      (error) => {
        //console.log( 'signin error' );
        //console.log( 'error' + JSON.stringify( error ) );
        this.global_service.errorstatus = "on";
        this.global_service.spinneroff();
      }
    );
  }

  toggle() {
    this.valeur = !this.valeur;
  }
}



