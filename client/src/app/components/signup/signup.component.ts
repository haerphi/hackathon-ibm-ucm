import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  SignUpisShown: boolean = true; // Hidden by default

  toggleShowSignUp() {
    this.SignUpisShown = !this.SignUpisShown;
  }

}
