import { Component, OnInit } from "@angular/core";
import { FetchService } from "../../services/fetch.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  constructor(public router: Router, private fetchService: FetchService) {}

  ngOnInit() {}

  searchFnc(text: string) {
    this.search(text);
  }

  onKeydown(event: { key: string }, text: string) {
    if (event.key === "Enter") {
      this.search(text);
    }
  }

  async search(text: string) {
    this.fetchService.search(text);
    this.router.navigate(["search"]);
  }
}
