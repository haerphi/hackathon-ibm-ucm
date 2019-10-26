import { Component, OnInit } from "@angular/core";
import axios from "axios";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit() {}

  SignInisShown: boolean = true; // Hidden by default

  toggleShowSignIn() {
    this.SignInisShown = !this.SignInisShown;
  }

  async tryLogin(login: string, password: string) {
    let rep = await axios.post("http://localhost/login", {
      login: login,
      password: password
    });
    if (!rep.data.error) {
      this.authService.login(rep.data);
      this.toggleShowSignIn();
    } else {
      alert("error in the login :/");
    }
  }
}
