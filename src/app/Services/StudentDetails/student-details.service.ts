import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';

export class StudentDetails
 {
    userName !: string
    password !: string
    isValid!: number
    firstName!: string
    lastName!: string
    confirmPassword!: string
    course!: string
    rollNo !: number
    studentStandardId  !: number
    degreeCourseId !: number
    btechCourseId !: number
    interCourseId !: number
}

@Injectable({
  providedIn: 'root'
})

export class StudentDetailsService {

  constructor(private _httpclient: HttpClient) { }
  

  ShowStudentDetails ():any
  {
    return this._httpclient.get("https://localhost:44330/api/StudentLogin/DisplayStudentDetail");
  }

  // for checking the student Login Details
  StudentLoginChecking( username : string , password : string):any
  {
    return this._httpclient.get("https://localhost:44330/api/StudentLogin/StudentLoginChecking?userName="+username+"&password="+password)
   // https://localhost:44330/api/StudentLogin/StudentLoginChecking?userName=suresh%40123&password=sai9071
  }
  InsertStudentRegDetails( body : StudentDetails) : any
  {
      return this._httpclient.put("https://localhost:44330/api/StudentLogin/InsertStudentRegDetails" ,body)
  }
  checkFollow( resquest : boolean) : any
  { debugger
    return this._httpclient.get("https://localhost:44330/api/Followtoggel/Toggelebutton?follow="+resquest);
  }
}//https://localhost:44330/api/StudentLogin/InsertStudentRegDetails

// https://localhost:44330/api/Followtoggel/Toggelebutton?follow=false