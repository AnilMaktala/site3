import { Component, OnInit } from "@angular/core";
import { AuthService } from "../reusable/connexion/services/auth/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-postconnexion",
  templateUrl: "./postconnexion.component.html",
  styleUrls: ["./postconnexion.component.scss"],
})
export class PostconnexionComponent implements OnInit{
  constructor ( public auth: AuthService, public router: Router ) { }
  
  ngOnInit (): void
  {
    this.router.navigateByUrl("private");
  }

  signout() {
    this.auth.signOut();
    this.router.navigateByUrl("user");
  }
}
