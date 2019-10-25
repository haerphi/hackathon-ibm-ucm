import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  searchFnc(text: string) {
    console.log(text);
  }

  onKeydown(event: { key: string }, text: string) {
    if (event.key === "Enter") {
      console.log(event);
    }
  }
}
