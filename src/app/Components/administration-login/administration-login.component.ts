import { Component } from '@angular/core';
import { Router } from '@angular/router';
import{AdministrationService} from 'src/app/Services/StudentDetails/administration.service'
@Component({
  selector: 'app-administration-login',
  templateUrl: './administration-login.component.html',
  styleUrls: ['./administration-login.component.css']
})
export class AdministrationLoginComponent {
  constructor( private _administrationService : AdministrationService ,private _router : Router)
  {}
  username! : string ;
    password !: string;
    AdministrationLoginChecking( username :string , password :string  )
    {
      debugger  
      this._administrationService.AdministrationLoginChecking(username,password).subscribe(
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
