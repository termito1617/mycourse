import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';

import { CourseComponent } from './course.component';

const routes: Routes = [
  { path: 'course', component: CourseComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class CourseRoutingModule {

}