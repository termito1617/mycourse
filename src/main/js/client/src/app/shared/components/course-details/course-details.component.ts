import { Component, Input } from '@angular/core';
import { CourseDetails } from '../../model/course-details';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent {

  static DESCRIPTION_MAX_LENGTH = 255;
  static POSTFIX = '...';

  @Input()
  courseDetails: CourseDetails;
  
  constructor() { 

  }
}
