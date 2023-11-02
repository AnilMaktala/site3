import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from "@angular/core";

@Component({
  selector: "toggle",
  templateUrl: "./toggle.component.html",
  styleUrls: ["./toggle.component.scss"],
})
export class ToggleComponent implements OnInit, OnChanges {
  @Input() valeur: boolean = false;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    //console.log("changes = " + JSON.stringify(changes));
  }

  ngOnInit(): void {}
}
