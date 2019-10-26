import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ask',
  templateUrl: './ask.component.html',
  styleUrls: ['./ask.component.scss']
})
export class AskComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  AskisShown: boolean = true; // Hidden by default

  toggleShowAsk() {
    this.AskisShown = !this.AskisShown;
  }
}
