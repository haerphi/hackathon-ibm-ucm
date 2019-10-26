import { Component, OnInit } from "@angular/core";
import { FetchService } from "src/app/services/fetch.service";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"]
})
export class SignupComponent implements OnInit {
  public pathSteps = null;
  public legalstatus = null;
  public selfemplyedstatus = null;
  public jobdomains = null;

  constructor(private fetchService: FetchService) {}

  ngOnInit() {
    this.getSelect();
  }

  SignUpisShown: boolean = true; // Hidden by default

  async getSelect() {
    setTimeout(async () => {
      this.pathSteps = await this.fetchService.fetchBasic("pathsteps");
      this.legalstatus = await this.fetchService.fetchBasic("legalstatus");
      this.selfemplyedstatus = await this.fetchService.fetchBasic(
        "selfemplyedstatus"
      );
      this.jobdomains = await this.fetchService.fetchBasic("jobdomains");
    }, 20000);
    console.log(!this.selfemplyedstatus);
  }

  toggleShowSignUp() {
    this.SignUpisShown = !this.SignUpisShown;
  }
}
