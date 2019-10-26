import { Component, OnInit } from "@angular/core";
import { FetchService } from "../../services/fetch.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  constructor(private fetchService: FetchService) {}

  ngOnInit() {}

  searchFnc(text: string) {
    this.fetchService.search(text);
  }

  onKeydown(event: { key: string }, text: string) {
    if (event.key === "Enter") {
      this.fetchService.search(text);
    }
  }
}
