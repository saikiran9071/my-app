import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule , ReactiveFormsModule} from '@angular/forms';
import { CouresComponent } from './Components/coures/coures.component';
import { DepatmentComponent } from './Components/depatment/depatment.component';
import { JbsLoginComponent } from './Components/jbs-login/jbs-login.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { StudentDetailsComponent } from './Components/student-details/student-details.component';
import {MatTableModule} from '@angular/material/table';
import {StudentDetailsService} from 'src/app/Services/StudentDetails/student-details.service';
import { StudentLoginComponent } from './Components/student-login/student-login.component';
import { StudentRegistrationComponent } from './Components/student-registration/student-registration.component'
import {MatFormFieldModule} from '@angular/material/form-field';
import { FacultyLoginComponent } from './Components/faculty-login/faculty-login.component';
import { InstitutionDashboardComponent } from './Components/institution-dashboard/institution-dashboard.component';
import { FacalityRegistrationComponent } from './Components/facality-registration/facality-registration.component';
@NgModule({
  declarations: [
    AppComponent,
    CouresComponent,
    DepatmentComponent,
    JbsLoginComponent,
    StudentDetailsComponent,
    StudentLoginComponent,
    StudentRegistrationComponent,
    FacultyLoginComponent,
    InstitutionDashboardComponent,
    FacalityRegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatSlideToggleModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    HttpClientModule,
    MatTableModule,
    MatFormFieldModule
  ],
  providers: [StudentDetailsService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
