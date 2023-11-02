import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from "@angular/core";
import { Modelinputnumber } from "./modelinputnumber";

@Component({
  selector: "inputnumber",
  templateUrl: "./inputnumber.component.html",
  styleUrls: ["./inputnumber.component.scss"],
})
export class InputnumberComponent implements OnInit, OnChanges {
  @Input() model!: Modelinputnumber;
  msgerror: string = "Erreur";

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    //console.log("changes = " + JSON.stringify(changes));
  }

  ngOnInit(): void {}
}
