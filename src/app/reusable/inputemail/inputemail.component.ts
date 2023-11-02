import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from "@angular/core";
import { Modelinputemail } from "./modelinputemail";

@Component({
  selector: "inputemail",
  templateUrl: "./inputemail.component.html",
  styleUrls: ["./inputemail.component.scss"],
})
export class InputemailComponent implements OnInit, OnChanges {
  @Input() model!: Modelinputemail;
  msgerror: string = "Erreur";

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    //console.log("changes = " + JSON.stringify(changes));
  }

  ngOnInit(): void {}
}
