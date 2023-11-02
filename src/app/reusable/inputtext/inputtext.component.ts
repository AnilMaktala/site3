import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Modelinputtext } from './modelinputtext';

@Component({
  selector: "inputtext",
  templateUrl: "./inputtext.component.html",
  styleUrls: ["./inputtext.component.scss"],
})
export class InputtextComponent implements OnInit, OnChanges {
  @Input() model!: Modelinputtext;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges ( changes: SimpleChanges ): void
  {
    //console.log("changes = " + JSON.stringify(changes));
  }

}
