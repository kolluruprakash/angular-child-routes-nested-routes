import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProjectsRoutingModule} from 'projects-routing';
@NgModule({
  imports: [
    CommonModule,
    ProjectsRoutingModule
  ],
  exports:[
    ProjectsRoutingModule
  ]
  declarations: []
})
export class ProjectsModule { }