import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseComponent } from './course.component';
import { CourseRoutingModule } from './course-routing.component';



@NgModule({
  declarations: [CourseComponent],
  imports: [
    CommonModule, CourseRoutingModule
  ]
})
export class CourseModule { }
