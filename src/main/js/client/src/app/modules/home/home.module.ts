import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponent } from './home.component';
import { CoreModule } from 'src/app/core/core.module';
import { TopCoursesComponent } from './top-courses/top-courses.component';
import { HomeRoutingModule } from './home-touting.module';



@NgModule({
  declarations: [HomeComponent, TopCoursesComponent],
  imports: [
    CommonModule, SharedModule, CoreModule, HomeRoutingModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
