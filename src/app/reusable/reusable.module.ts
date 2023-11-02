import { NgModule } from "@angular/core";
import { InputtextComponent } from "./inputtext/inputtext.component";
import { InputemailComponent } from "./inputemail/inputemail.component";
import { InputnumberComponent } from "./inputnumber/inputnumber.component";
import { InputpasswordComponent } from "./inputpassword/inputpassword.component";
import { ToggleComponent } from "./toggle/toggle.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@NgModule({
  imports: [FontAwesomeModule, CommonModule, FormsModule],
  declarations: [
    InputemailComponent,
    InputnumberComponent,
    InputpasswordComponent,
    InputtextComponent,
    ToggleComponent,
  ],
  exports: [
    InputemailComponent,
    InputnumberComponent,
    InputpasswordComponent,
    InputtextComponent,
    ToggleComponent,
  ]
})
export class ReusableModule {}
