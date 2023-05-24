import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CouresComponent } from './Components/coures/coures.component';
import { DepatmentComponent } from './Components/depatment/depatment.component';
import { JbsLoginComponent } from './Components/jbs-login/jbs-login.component';
import { StudentDetailsComponent } from './Components/student-details/student-details.component';
import{StudentLoginComponent} from 'src/app/Components/student-login/student-login.component';
import{ StudentRegistrationComponent } from 'src/app/Components/student-registration/student-registration.component'
import { InstitutionDashboardComponent } from './Components/institution-dashboard/institution-dashboard.component';

import { FacultyLoginComponent } from './Components/faculty-login/faculty-login.component';
import { FacalityRegistrationComponent } from './Components/facality-registration/facality-registration.component';
import { AdministrationLoginComponent } from './Components/administration-login/administration-login.component';
import { AdministrationRegistrationComponent } from './Components/administration-registration/administration-registration.component';
import { FacalityDashboadComponent } from './Components/facality-dashboad/facality-dashboad.component';
const routes: Routes = [
   {path:"course" , component:CouresComponent},
   {path:"department" , component:DepatmentComponent},
   {path:"login" , component:JbsLoginComponent},
   {path : "studentdetails" , component : StudentDetailsComponent},
   {path : "studentlogin" , component : StudentLoginComponent},
   {path : "studentregistration" , component : StudentRegistrationComponent},
   {path : "dashboard" , component : InstitutionDashboardComponent},
   {path : "facalitylogin" , component : FacultyLoginComponent},
   {path : "facalityregister" , component : FacalityRegistrationComponent},
   {path : "administrationlogin" , component : AdministrationLoginComponent},
   {path : "administrationregister" , component : AdministrationRegistrationComponent},
   {path : "facalitydashboard" , component : FacalityDashboadComponent},

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
