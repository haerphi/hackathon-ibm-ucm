import { Component } from "@angular/core";
import { AuthService } from "./services/auth.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "ibm-ucm";
  constructor(private authService: AuthService) {}

  SignInisShown: boolean = false; // Hidden by default

  toggleShowSignIn() {
    this.SignInisShown = !this.SignInisShown;
  }

  SignUpisShown: boolean = false; // Hidden by default

  toggleShowSignUp() {
    this.SignUpisShown = !this.SignUpisShown;
  }
}
