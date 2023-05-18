import { Component, importProvidersFrom } from '@angular/core';
import{FormControl , Validators , FormGroup} from '@angular/forms';


@Component({
  selector: 'app-jbs-login',
  templateUrl: './jbs-login.component.html',
  styleUrls: ['./jbs-login.component.css']
})
export class JbsLoginComponent {
  
  signin: FormGroup = new FormGroup({
    loginFormControl : new FormControl('',[Validators.required , Validators.email]),
    email: new FormControl('', [Validators.email, Validators.required ]),
    password: new FormControl('', [Validators.required, Validators.min(3) ])
  });
  hide = true;
  get emailInput() { return this.signin.get('email'); }
  get passwordInput() { return this.signin.get('password'); } 
  longText = `The Office of the Secretary of State is one of the District's newest agencies. Its mission is to protect the economic interests of residents, 
  businesses, and visitors in the Reframe by licensing and regulating businesses.`;
  date : string ="12/10/2023"
  longText2 ="Introducing the Office of the Secretary of State to our Customers | One of the District's Newest Agencies."
  longText3 ="Webinar: DCRA At Your Neighborhood Library - Learn The Process Of Starting A Business."
  longText4="Webinar: Foundations for a Successful Business: Module 3, The Business Plan."
}
