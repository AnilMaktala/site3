import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { from } from 'rxjs';
import { Auth } from 'aws-amplify';
import { GlobalService } from 'src/app/services/global/global.service';
import { CookieService } from "ngx-cookie-service";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  public loggedIn: BehaviorSubject<boolean>;
  public ipaddress: BehaviorSubject<string>;
  public Sub: BehaviorSubject<string>;
  public Email: BehaviorSubject<string>;
  public Username: BehaviorSubject<string>;
  public currentUserInfo: BehaviorSubject<string>;
  public currentUserCredentials: BehaviorSubject<string>;
  public id: BehaviorSubject<string>;

  constructor(
    public global_service: GlobalService,
    private router: Router,
    private cookieservice: CookieService
  ) {
    this.loggedIn = new BehaviorSubject<boolean>(false);
    this.ipaddress = new BehaviorSubject<string>("");
    this.Sub = new BehaviorSubject<string>("");
    this.Email = new BehaviorSubject<string>("");
    this.Username = new BehaviorSubject<string>("");
    this.currentUserInfo = new BehaviorSubject<string>("");
    this.currentUserCredentials = new BehaviorSubject<string>("");
    this.id = new BehaviorSubject<string>("");
  }

  public signUp(email: string, password: string): Observable<any> {
    return from(Auth.signUp(email, password));
  }

  public confirmSignUp(email: any, code: any): Observable<any> {
    return from(Auth.confirmSignUp(email, code));
  }

  public signIn(
    email: string | null,
    password: string | null
  ): Observable<any> {
    if (email && password) {
      return from(Auth.signIn(email, password));
    } else return new Observable();
  }

  public signOut(): Observable<any> {
    this.cookieservice.set("password", "", {
      expires: 365,
    });
    this.cookieservice.set("ETAT", "OFF", {
      expires: 365,
    });
    return from(Auth.signOut());
  }

  public resendCode(username: string): Observable<any> {
    return from(Auth.resendSignUp(username));
  }

  public forgotPassword(username: string): Observable<any> {
    return from(Auth.forgotPassword(username));
  }

  public confirmNewPassword(
    email: string,
    verificationCode: string,
    password: string
  ): Observable<any> {
    return from(Auth.forgotPasswordSubmit(email, verificationCode, password));
  }

  public getCreds() {
    from(Auth.currentUserInfo()).subscribe(
      (result) => {
        this.currentUserInfo.next(JSON.stringify(result));
        this.id.next(result.id);
        this.Email.next(result.attributes.email);
        this.Sub.next(result.attributes.sub);
        this.currentCredentials();
      },
      (error) => {}
    );
  }

  currentCredentials() {
    from(Auth.currentCredentials()).subscribe((result) => {
      this.currentUserCredentials.next(JSON.stringify(result));
      return result;
    });
  }
}
