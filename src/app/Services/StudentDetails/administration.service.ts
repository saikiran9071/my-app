import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';

export class AdministrationDetails
 { 
  id !:number;
  authorityFirstname !: string ;
  lastname !: string
  phone!: number
  email!: string
  username!: string
  designationId !: number
  confirmPassword !: string
  password !: string
}

@Injectable({
  providedIn: 'root'
})
export class AdministrationService {

  constructor(private _httpclient: HttpClient) { }

  ShowAdministrationDetails ():any
  {
    return this._httpclient.get("https://localhost:44330/api/AdministrationDetails/GetAdministrationDetails");
  }

  // for checking the Administration Login Details
  AdministrationLoginChecking( username : string , password : string):any
  {
    debugger
    return this._httpclient.get("https://localhost:44330/api/AdministrationDetails/AdministrationLoginChecking?userName="+username+"&password="+password)
   // https://localhost:44330/api/AdministrationLogin/AdministrationLoginChecking?userName=suresh%40123&password=sai9071
  }
  InsertAdministrationRegDetails( body : AdministrationDetails) : any
  {
      return this._httpclient.put("https://localhost:44330/api/AdministrationDetails/InsertAdministrationDetails" ,body)
  }

  // https://localhost:44330/api/AdministrationDetails/AdministrationLoginChecking?userName=raju123&password=raju%2A%2A
}
