import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Components
import { SurveyComponent } from './survey/survey.component';
import { ViewsurveyComponent } from './viewsurvey/viewsurvey.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:"/survey",
    pathMatch:'full'
  },
  {
    path:"survey",
    component:SurveyComponent
  },
  {
    path:"survey/:id",
    component:SurveyComponent
  },
  {
    path:"viewsurvey",
    component:ViewsurveyComponent
  },
  {
    path:"viewsurvey/:id",
    component:ViewsurveyComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
