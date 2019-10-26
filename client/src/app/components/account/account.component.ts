import { Component, OnInit } from "@angular/core";
import axios from "axios";

@Component({
  selector: "app-account",
  templateUrl: "./account.component.html",
  styleUrls: ["./account.component.scss"]
})
export class AccountComponent implements OnInit {
  messages: any[] = [];

  constructor() {}

  ngOnInit() {
    this.firstMsg();
  }

  async firstMsg() {
    let rep: any = await axios.post("http://localhost/assistant");
    rep = rep.data.result.output.generic;
    this.messageGestion(rep);
  }

  messageGestion(rep) {
    rep.forEach(element => {
      console.log(element);
      let newMsg: any = { type: element.response_type };
      if (element.response_type === "text") {
        newMsg.text = element.text;
        this.messages.push(newMsg);
      } else if (element.response_type === "option") {
        newMsg.text = element.title;
        newMsg.options = element.options;
        this.messages.push(newMsg);
      }
    });
  }

  onKeydown(event: { key: string }, text: string) {
    if (event.key === "Enter") {
      this.sendToWatson(text);
    }
  }

  async sendToWatson(text: string) {
    if (text.length > 0) {
      let rep: any = await axios.post("http://localhost/assistant", {
        input: text
      });
      rep = rep.data.result.output.generic;
      this.messageGestion(rep);
    }
  }
}
