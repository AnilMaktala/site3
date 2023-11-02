import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { CommonModule } from "@angular/common";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { ButtonsComponent } from "./buttons/buttons.component";
import { PostconnexionComponent } from "./postconnexion/postconnexion.component";
import { ReusableModule } from "./reusable/reusable.module";
import { AuthGuard } from "./reusable/connexion/services/auth/auth.guard";
import { AuthService } from "./reusable/connexion/services/auth/auth.service";
import { GlobalService } from "./services/global/global.service";
import { PrivateComponent } from './private/private.component';
import { PublicComponent } from './public/public.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReusableModule,
    CommonModule,
    FormsModule,
    FontAwesomeModule,
    //GlobalService
  ],
  exports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule,
    CommonModule,
  ],
  declarations: [
    AppComponent,
    ButtonsComponent,
    PostconnexionComponent,
    PrivateComponent,
    PublicComponent,
    //GlobalService
  ],
  providers: [AuthGuard, AuthService],
  //schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ],
  bootstrap: [AppComponent],
})
export class AppModule {}
