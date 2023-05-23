import { Component ,OnInit } from '@angular/core';
import{StudentDetailsService ,StudentDetails} from 'src/app/Services/StudentDetails/student-details.service';
import { Router } from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-student-registration',
  templateUrl: './student-registration.component.html',
  styleUrls: ['./student-registration.component.css']
})
export class StudentRegistrationComponent implements OnInit {

ResposeOfIntsert ! : boolean;
veriable : string = " sai"
studentDetails : StudentDetails = new StudentDetails();
emptyobj : StudentDetails = new StudentDetails();
school : boolean = false
inter !: boolean
degree !: boolean
btech !: boolean
constructor( private _studentDetailsService : StudentDetailsService ,private _router : Router)
{}
  ngOnInit(): void {
    console.log(this.school)
  }
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
completeLogin(login :NgForm){
  // In .ts file
 login.reset() 
 // call this inbuilt method to reset the form
 }
}
