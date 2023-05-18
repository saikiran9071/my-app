import { Component } from '@angular/core';
import{StudentDetailsService ,StudentDetails} from 'src/app/Services/StudentDetails/student-details.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-registration',
  templateUrl: './student-registration.component.html',
  styleUrls: ['./student-registration.component.css']
})
export class StudentRegistrationComponent {

ResposeOfIntsert ! : boolean;
veriable : string = " sai"
studentDetails : StudentDetails = new StudentDetails();
emptyobj : StudentDetails = new StudentDetails();

constructor( private _studentDetailsService : StudentDetailsService ,private _router : Router)
{}
// check() : any
// { 
//   if(this.ResposeOfIntsert==this.veriable)
//   {
//     alert("Student Data Added Sucessfully");
//   }
  
// }
InsertStudentRegDetails( body : StudentDetails) : any
{
  
  debugger
  if(body!=null)
  {
    return this._studentDetailsService.InsertStudentRegDetails(body).subscribe(
      (resp:any)=>{
       // this.studentDetails=this.emptyobj;
        if(resp==true) 
      { debugger
       alert("Student Data Added Sucessfully")
      }
       else
      {
        alert("Sorry !! Your Data Is not Inserted")
      }
      }
   
    )

  }
}

}
