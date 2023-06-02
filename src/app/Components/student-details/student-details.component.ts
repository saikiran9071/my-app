import { Component , ViewChild } from '@angular/core';
import{StudentDetailsService} from 'src/app/Services/StudentDetails/student-details.service';
import {MatTable} from '@angular/material/table';
export class StudentDetails
 {    id !:number
    userName !: string
    password !: string
    isValid!: number
    firstName!: string
    lastName!: string
    confirmPassword!: string
    course!: string
    rollNo !: number
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
   this._studentDetailsService.ShowStudentDetails().subscribe(
    (data:any)=>{
      this.studentlistarray = data
    }
   )
   console.log(this.studentlistarray);
 
  }
  showfollow : boolean = true;
 // showunfollow : boolean = false;
  resquest !: boolean ;
  toggle = true;
  status = 'Unfollow'; 
  showtest =true; 
Follow(event:any)
{ debugger
 
 // if(this.showfollow)
 this.showfollow=event.target.innerText=='follow' ? true : false;
  
    return this._studentDetailsService.checkFollow(this.resquest=this.showfollow).subscribe(
      (resp:boolean)=>{
       this.showfollow = resp;
       this.toggle = resp;
       //this.toggle = !this.toggle;
       this.status = this.toggle ? 'follow' : 'Unfollow';
      })
  }
    // if(this.showunfollow)
    // {
    // return this._studentDetailsService.checkFollow(this.resquest=false).subscribe(
    //   (resp:boolean)=>{
    //     this.showfollow=resp;
    //     this.showunfollow=!resp;
    //   })
    // } 
 //'walking' ? 'steps' : 'km';


// enableDisableRule() {

//     this.toggle = !this.toggle;
//     this.status = this.toggle ? 'Enable' : 'Disable';
// }
}
