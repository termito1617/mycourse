import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

import { CourseService } from 'src/app/core/services/course.service';
import { CourseDetails } from 'src/app/shared/model/course-details';

@Component({
  selector: 'app-top-courses',
  templateUrl: './top-courses.component.html',
  styleUrls: ['./top-courses.component.scss']
})
export class TopCoursesComponent implements OnInit {

  coursesDetails: Observable<CourseDetails[]>;

  constructor(private courseService: CourseService) { }

  ngOnInit() {
    this.coursesDetails = this.courseService.getTopCourses();
  }

}
