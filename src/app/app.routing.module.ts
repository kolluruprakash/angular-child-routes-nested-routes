import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {InvalidComponent} from './invalid/invalid.component';
const appRoutes: Routes = [
 { path:'dash', component:DashboardComponent },
 { path:'', redirectTo:"/dash", pathMatch:"full"},
 { path:'**', component:InvalidComponent }
];
@NgModule({
  imports:[RouterModule.forRoot(appRoutes, {enableTracing:true})],
  exports:[RouterModule]
})
export class AppRoutingModule{

}