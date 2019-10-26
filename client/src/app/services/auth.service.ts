import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  public token: string = null;

  constructor(public router: Router) {}

  login(token: string) {
    this.token = token;
  }

  async isLogin() {
    if (this.token !== null) {
      return true;
    } else {
      return false;
    }
  }
}
