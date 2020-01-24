import { Component, OnInit } from '@angular/core';

import { UserSignUpForm } from 'src/app/shared/model/user-sign-up-form';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: ['z-index: 10;']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  processSignUp(userSigUpForm: UserSignUpForm) {
    
  }
}
