import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ibm-ucm';


  SignInisShown: boolean = false; // Hidden by default

  toggleShowSignIn() {
    this.SignInisShown = !this.SignInisShown;
  }

  SignUpisShown: boolean = false; // Hidden by default

  toggleShowSignUp() {
    this.SignUpisShown = !this.SignUpisShown;
  }
}
