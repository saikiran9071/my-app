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
}

@Injectable({
  providedIn: 'root'
})

export class StudentDetailsService {

  constructor(private _httpclient: HttpClient) { }
  

  ShowStudentDetails ():any
  {
    return this._httpclient.get("https://localhost:44330/api/Student/GetStudentDetails");
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
}//https://localhost:44330/api/StudentLogin/InsertStudentRegDetails
    