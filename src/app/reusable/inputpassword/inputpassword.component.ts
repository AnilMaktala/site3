import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from "@angular/core";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { Modelinputpassword } from "./modelinputpassword";

@Component({
  selector: "inputpassword",
  templateUrl: "./inputpassword.component.html",
  styleUrls: ["./inputpassword.component.scss"],
})
export class InputpasswordComponent implements OnInit, OnChanges {
  @Input() model!: Modelinputpassword;
  faEye = faEye;
  msgerror: string = "Erreur";
  hide: boolean = true;

  myFunction() {
    this.hide = !this.hide;
  }

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    //console.log("changes = " + JSON.stringify(changes));
  }

  ngOnInit(): void {}
}
