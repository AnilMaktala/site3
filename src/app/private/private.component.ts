import { Component, OnInit } from "@angular/core";
import { APIService } from "../API.service";

@Component({
  selector: "app-private",
  templateUrl: "./private.component.html",
  styleUrls: ["./private.component.scss"],
})
export class PrivateComponent implements OnInit {
  result: any = {};

  constructor(private api: APIService) {}

  async ngOnInit(): Promise<void> {
    this.result = await this.api.CreateTodo({
      name: "essai",
    });
  }
}
