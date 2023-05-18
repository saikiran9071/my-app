import { Component } from '@angular/core';
import { Router } from '@angular/router';

import{FacalityDetailsService}from 'src/app/Services/StudentDetails/Facatily/facality-details.service';
@Component({
  selector: 'app-faculty-login',
  templateUrl: './faculty-login.component.html',
  styleUrls: ['./faculty-login.component.css']
})
export class FacultyLoginComponent {
  constructor( private _FacalityDetailsService : FacalityDetailsService ,private _router : Router)
  {}
    username! : string ;
    password !: string;
    test !: string;
    FacalityLoginChecking( username :string , password :string  )
    {
      
      this._FacalityDetailsService.FacalityLoginChecking(username,password).subscribe(
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
}
