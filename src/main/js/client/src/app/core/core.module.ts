import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MustMatchDirective } from './directives/must-match.directive';



@NgModule({
  declarations: [MustMatchDirective],
  imports: [
    CommonModule
  ],
  exports: [MustMatchDirective]
})
export class CoreModule { }
