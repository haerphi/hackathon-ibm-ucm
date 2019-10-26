import { Component, OnInit } from "@angular/core";
import { FetchService } from "src/app/services/fetch.service";

@Component({
  selector: "app-searchresult",
  templateUrl: "./searchresult.component.html",
  styleUrls: ["./searchresult.component.scss"]
})
export class SearchresultComponent implements OnInit {
  constructor(private fetchService: FetchService) {}

  ngOnInit() {}

  searchFnc(text: string) {
    this.fetchService.search(text);
  }

  //*nfFor="let cat of this.fetchService.resultSearch"
}
