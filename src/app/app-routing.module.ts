import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CouresComponent } from './Components/coures/coures.component';
import { DepatmentComponent } from './Components/depatment/depatment.component';
import { JbsLoginComponent } from './Components/jbs-login/jbs-login.component';
import { StudentDetailsComponent } from './Components/student-details/student-details.component';
import{StudentLoginComponent} from 'src/app/Components/student-login/student-login.component';
import{ StudentRegistrationComponent } from 'src/app/Components/student-registration/student-registration.component'
const routes: Routes = [
   {path:"course" , component:CouresComponent},
   {path:"department" , component:DepatmentComponent},
   {path:"login" , component:JbsLoginComponent},
   {path : "studentdetails" , component : StudentDetailsComponent},
   {path : "studentlogin" , component : StudentLoginComponent},
   {path : "studentregistration" , component : StudentRegistrationComponent},

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
