import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import{AdministrationService , AdministrationDetails} from 'src/app/Services/StudentDetails/administration.service';
@Component({
  selector: 'app-administration-registration',
  templateUrl: './administration-registration.component.html',
  styleUrls: ['./administration-registration.component.css']
})
export class AdministrationRegistrationComponent {
  administrationDetails: AdministrationDetails = new AdministrationDetails();

  constructor( private _administrationService : AdministrationService )
  {}
  InsertStudentRegDetails( body : AdministrationDetails) : any
  {
    
   // debugger
    if(body!=null)
    {
      return this._administrationService.InsertAdministrationRegDetails(body).subscribe(
        (resp:any)=>{
          
        if(resp==true) 
        { 
          debugger
         
         alert("facality Data Added Sucessfully")
        
         //this.facalityDetails=this.emptyobj;
        }
         else
        {
          alert("Sorry !! Your Data Is not Inserted")
        }
        }
      )
    }
  }
  completeLogin( register : NgForm)
  {
    register.reset();
  }
}
