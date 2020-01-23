import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { UserSignUpForm } from 'src/app/shared/model/user-sign-up-form';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  isOpened = false;
  form = new UserSignUpForm();

  @Output()
  signUpEvent = new EventEmitter<UserSignUpForm>();

  constructor() { }

  ngOnInit() {

  }

  open() {
      this.isOpened = true;
  }

  close() {
      this.isOpened = false;
      return false;
  }

  submit() {
      this.signUpEvent.emit(this.form);
  }
}
