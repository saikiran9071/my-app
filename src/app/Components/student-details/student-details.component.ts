import { Component , ViewChild } from '@angular/core';
import{StudentDetailsService} from 'src/app/Services/StudentDetails/student-details.service';
import {MatTable} from '@angular/material/table';
export class StudentDetails{
  studentName! : string ;
  roll ! : number ;
  course ! : string
}

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent {
table : any
 // @ViewChild(MatTable) table: MatTable<StudentDetails>;
  studentlistarray : StudentDetails  []= []
  constructor(private _studentDetailsService : StudentDetailsService){
  }

  ShowStudentDetails()
  {
  //  debugger
   return this._studentDetailsService.ShowStudentDetails().subscribe(
    (data:any)=>{
      this.studentlistarray = data
    }
   )
  }
}
