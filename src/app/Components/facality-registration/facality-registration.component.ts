import { Component , ViewChild ,OnInit} from '@angular/core';
import{FacalityDetailsService ,FacalityDetails} from 'src/app/Services/StudentDetails/Facatily/facality-details.service';
import { Router } from '@angular/router';
import {NgForm} from '@angular/forms'

export class DepartmentDetails
{ id!:number
  departmentName!: string
  //facultyDetails: FacalityDetails  []=[]
}
@Component({
  selector: 'app-facality-registration',
  templateUrl: './facality-registration.component.html',
  styleUrls: ['./facality-registration.component.css']
})
//@ViewChild('myForm', {static: false}) form: NgForm;

export class FacalityRegistrationComponent implements OnInit{
  ResposeOfIntsert ! : boolean;
  facalityDetails : FacalityDetails = new FacalityDetails();
  emptyobj : FacalityDetails = new FacalityDetails();
  reguistersucces!:NgForm
  
  //departmentList : DepartmentDetails []=[];
  departmentList : any;
  constructor( private _faclityDetailsService : FacalityDetailsService ,
    private _router : Router)
  {}
  ngOnInit(): void {
    this._faclityDetailsService.ShowDepartments().subscribe(
      (respo:any)=>{
        this.departmentList=respo;
        console.log(this.departmentList)
      }
    )
  }
  completeLogin(login :NgForm){
    // In .ts file
   login.reset() 
   // call this inbuilt method to reset the form
   }


  InsertStudentRegDetails( body : FacalityDetails) : any
  {
    
   // debugger
    if(body!=null)
    {
      return this._faclityDetailsService.InsertFacailtyRegDetails(body).subscribe(
        (resp:any)=>{
          
        if(resp==true) 
        { 
          debugger
         
         alert("facality Data Added Sucessfully")
        
         this.facalityDetails=this.emptyobj;
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
