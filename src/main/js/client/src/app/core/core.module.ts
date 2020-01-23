import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MustMatchDirective } from './directives/must-match.directive';
import { CourseService } from './services/course.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [MustMatchDirective],
  imports: [
    CommonModule, HttpClientModule
  ],
  exports: [MustMatchDirective],
  providers: [ CourseService ]
})
export class CoreModule { }
