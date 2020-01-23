import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { LoginModule } from '../login/login.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule, LoginModule, RouterModule
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }
