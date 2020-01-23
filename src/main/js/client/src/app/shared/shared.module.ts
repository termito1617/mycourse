import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { TruncatePipe } from './pipes/truncate.pipe';



@NgModule({
  declarations: [CourseDetailsComponent, TruncatePipe],
  imports: [
    CommonModule
  ],
  exports: [CourseDetailsComponent]
})
export class SharedModule { }
