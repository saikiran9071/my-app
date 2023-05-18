import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class FacalityDetails
 {
  username !: string
  password !: string
  departmentId!: number
    facaltyname!: string
    lastname!: string
 
    phone !: number
    email !: string
}
@Injectable({
  providedIn: 'root'
})
export class FacalityDetailsService {

  constructor( private _httpclient: HttpClient) { }
  FacalityLoginChecking( username : string , password : string):any
  {
    return this._httpclient.get("https://localhost:44330/api/FacalityDetails/FacalityLoginChecking?userName="+username+"&password="+password)
  }

  InsertFacailtyRegDetails( body : FacalityDetails) : any
  {
      return this._httpclient.put("https://localhost:44330/api/FacalityDetails/InsertFacalityDetail" ,body)
  }
}
//https://localhost:44330/api/FacalityDetails/InsertFacalityDetail
//https://localhost:44330/api/FacalityDetails/FacalityLoginChecking?userName=ramesh123&password=remeshkota3