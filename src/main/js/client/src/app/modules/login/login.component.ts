import { Component, OnInit } from '@angular/core';
import { UserSignUpForm } from 'src/app/shared/model/user-sign-up-form';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  processSignUp(userSigUpForm: UserSignUpForm) {
    console.log(userSigUpForm);
  }
}
