import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ButtonsComponent } from "./buttons/buttons.component";
import { PostconnexionComponent } from "./postconnexion/postconnexion.component";
import { AuthGuard } from "./reusable/connexion/services/auth/auth.guard";
import { PrivateComponent } from "./private/private.component";
import { PublicComponent } from "./public/public.component";

const routes: Routes = [
  { path: "", redirectTo: "/public", pathMatch: "full" },
  { path: "buttons", component: ButtonsComponent },
  { path: "public", component: PublicComponent },
  { path: "private", component: PrivateComponent },
  { path: "postconnexion", component: PostconnexionComponent },
  {
    path: "user",
    loadChildren: () =>
      import("./reusable/connexion/user/user.module").then((m) => m.UserModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
