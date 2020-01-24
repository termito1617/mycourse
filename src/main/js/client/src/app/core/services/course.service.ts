import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CourseDetails } from '../../shared/model/course-details';

@Injectable()
export class CourseService {

  constructor(private http: HttpClient) { }

  getTopCourses() {
    return this.http.get<CourseDetails[]>('/api/courses/top.json');
  }
}
