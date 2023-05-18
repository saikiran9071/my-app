import { Component } from '@angular/core';

export class Departments 
{
  departmentName !: string ;
  depCheck : boolean =false
}

@Component({
  selector: 'app-depatment',
  templateUrl: './depatment.component.html',
  styleUrls: ['./depatment.component.css']
})
export class DepatmentComponent {
  _department:Departments = new Departments();
  departmentArray : Departments []=[];
  title = 'my-app';
  coursearray : any = [];
  // courseListArray : Array<{check:boolean,courseName:string}> =[
  //   {check:true , courseName : 'saikiran'},
  // ] 

  check : boolean =false ;
  showdelet !: boolean;
AddCourse(value : any)
{
  debugger
  if(value!==""){
    this.departmentArray.push(value)
    console.log(this.departmentArray)
    if(this.departmentArray.length>0)
    {
      this.showdelet=true
    }
    }
    else{
      alert("Enter Valid data")
    }
} 
ClearArray()
{
  this.departmentArray=[]
  this.showdelet=false
}
DeletCourse(item:any)
{
  for(let i=0 ; i<= this.departmentArray.length ; i++)
  {
    if(item==this.departmentArray[i])
    {
      this.departmentArray.splice(i,1);
    }
  } 177512328
}
// submit Form
todoSubmit(data:any){
  if(data!==""){
 this.departmentArray.push(data.todo)
  //this.todoForm.reset()
 }else{
   alert('Field required **')
 }
}
// showcheck(event:any){
//   console.log(event.checked)
// }
}
