import { Component, OnInit } from "@angular/core";
import { FetchService } from "src/app/services/fetch.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-searchresult",
  templateUrl: "./searchresult.component.html",
  styleUrls: ["./searchresult.component.scss"]
})
export class SearchresultComponent implements OnInit {
  constructor(public router: Router, private fetchService: FetchService) {}

  ngOnInit() {}

  searchFnc(text: string) {
    this.fetchService.search(text);
  }

  moveTo(id: number) {
    this.router.navigate([`/question/${id}`]);
  }

  AskisShown: boolean = false; // Hidden by default

  toggleShowAsk() {
    this.AskisShown = !this.AskisShown;
  }
}
