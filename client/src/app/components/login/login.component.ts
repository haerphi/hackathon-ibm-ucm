import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  SignInisShown: boolean = true; // Hidden by default

  toggleShowSignIn() {
    this.SignInisShown = !this.SignInisShown;
  }

}
