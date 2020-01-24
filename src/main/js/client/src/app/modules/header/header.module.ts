import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header.component';
import { LoginModule } from '../login/login.module';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule, LoginModule, RouterModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
