import { Component , Input } from '@angular/core';
import { Router } from '@angular/router';
import{StudentDetailsService} from 'src/app/Services/StudentDetails/student-details.service';
import {NgForm} from '@angular/forms'
export class StudenetLoginDetails
{
  
}

@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.css']
})
export class StudentLoginComponent {
  
constructor( private _studentDetailsService : StudentDetailsService ,private _router : Router)
{}

  username! : string ;
  password !: string;
  test !: string;
  StudentLoginChecking( username :string , password :string  )
  {
    
    this._studentDetailsService.StudentLoginChecking(username,password).subscribe(
      (resp:boolean)=>{
        if(resp==true)
        {
          this._router.navigate(['/studentdetails'])
        }
        else
        {
            alert("Please Enter Valied User and Password")
        }
      }
    )
  }
  SaveForm(register : NgForm)
  {
    register.reset();
  }
}
