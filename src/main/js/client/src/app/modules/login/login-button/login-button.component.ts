import { Component, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login-button',
  templateUrl: './login-button.component.html',
  styleUrls: ['./login-button.component.css']
})
export class LoginButtonComponent {

  @Output()
  private clicked = new EventEmitter();

  onClick(event: any) {
    this.clicked.emit(event);
  }
}
