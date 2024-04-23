import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnInit {
  isFromSignup:boolean = true;
  isFromLogin:Boolean = true
  otp!: number;
  constructor(private auth:AuthService, private router:Router, private route: ActivatedRoute) {
    this.route.queryParams.subscribe((resp:any)=>{
      console.log(resp)
      this.isFromSignup = resp?.isSignup
    })
   }

  ngOnInit(): void {
    const email : string | null = this.auth.email
  }
  submit(){
  const email : string = this.auth.email
  this.auth.verifyOtp(email,this.otp).subscribe(
    (resp:any)=>{
      if(this.isFromSignup){
        alert('Otp Verified Successfully.')
        this.router.navigate(['/login']);
      }
      else{
        this.router.navigate(['/password'])
      }
    },
    (err)=>{
      console.error('verification error',err.message);
      alert("Error verifying OTP")
    }
  );

  }

}
