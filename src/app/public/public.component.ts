import { Component, OnInit } from "@angular/core";
import { APIService } from "../API.service";

@Component({
  selector: "app-public",
  templateUrl: "./public.component.html",
  styleUrls: ["./public.component.scss"],
})
export class PublicComponent implements OnInit {
  result: any = {};

  constructor(private api: APIService) {}

  async ngOnInit(): Promise<void> {
    this.result = await this.api.ListTodos();
  }
}
