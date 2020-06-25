import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {AppRoutingModule} from './app.routing.module';
import {ProjectsRoutingModule} from './projects/projects-routing.module';
import {InvalidComponent} from './invalid/invalid.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  imports: [ BrowserModule, FormsModule ,AppRoutingModule,ProjectsRoutingModule],
  declarations: [ AppComponent, DashboardComponent, InvalidComponent, HeaderComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
