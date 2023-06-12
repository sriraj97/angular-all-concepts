import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ReviewComponent } from './pages/review/review.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"Projects",component:ProjectsComponent},
   {path:"Review",component:ReviewComponent},
  {path:"contacts",component:ContactComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
