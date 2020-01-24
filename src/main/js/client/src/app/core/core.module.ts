import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { MustMatchDirective } from './directives/must-match.directive';
import { StickyDirective } from './directives/sticky.directive';
import { CourseService } from './services/course.service';

@NgModule({
  declarations: [
    MustMatchDirective, StickyDirective
  ],
  imports: [
    CommonModule, HttpClientModule
  ],
  exports: [
    MustMatchDirective, StickyDirective
  ],
  providers: [ 
    CourseService 
  ]
})
export class CoreModule { }
