import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';
import { LoginButtonComponent } from './login-button/login-button.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { CoreModule } from '../../core/core.module'



@NgModule({
  declarations: [LoginComponent, LoginButtonComponent, LoginFormComponent],
  imports: [
    CommonModule, FormsModule, CoreModule
  ],
  exports: [LoginComponent]
})
export class LoginModule { }
