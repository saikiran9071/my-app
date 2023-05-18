import { Component } from '@angular/core';

export class Course
{
  check ! : boolean
  courseName !: string 
}

@Component({
  selector: 'app-coures',
  templateUrl: './coures.component.html',
  styleUrls: ['./coures.component.css']
})


export class CouresComponent {
  title = 'my-app';
  coursearray : any = [];
  // courseListArray : Array<{check:boolean,courseName:string}> =[
  //   {check:true , courseName : 'saikiran'},
  // ] 
  courseListArray : Course []=[];
  check : boolean =false ;
  showdelet !: boolean;
AddCourse(value : any)
{
  if(value!==""){
    this.coursearray.push(value)
    console.log(this.coursearray)
    if(this.coursearray.length>0)
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
  this.coursearray=[]
  this.showdelet=false
}
DeletCourse(item:any)
{
  for(let i=0 ; i<= this.coursearray.length ; i++)
  {
    if(item==this.coursearray[i])
    {
      this.coursearray.splice(i,1);
    }
  } 177512328
}
// submit Form
todoSubmit(value:any){
  if(value!==""){
 this.coursearray.push(value.todo)
  //this.todoForm.reset()
 }else{
   alert('Field required **')
 }
}
// showcheck(event:any){
//   console.log(event.checked)
// }
}
