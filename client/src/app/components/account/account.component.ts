import { Component, OnInit, OnDestroy } from "@angular/core";
import axios from "axios";
import { AuthService } from "src/app/services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-account",
  templateUrl: "./account.component.html",
  styleUrls: ["./account.component.scss"]
})
export class AccountComponent implements OnInit, OnDestroy {
  messages: any[] = [];

  constructor(public router: Router, private authService: AuthService) {}

  async ngOnInit() {
    const connected = await this.authService.isLogin();
    if (connected) {
      this.firstMsg();
    } else {
      this.router.navigate([""]);
    }
  }

  ngOnDestroy() {}

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

  OptionsShown: boolean = false; // Shown by default

  toggleShowOptions() {
    this.OptionsShown = !this.OptionsShown;
  }
}
