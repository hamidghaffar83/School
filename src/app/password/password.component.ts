import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent implements OnInit {
  newPassword!: string;
  confirmPassword!: string;

  constructor(private atuh: AuthService, private route: Router) { }

  ngOnInit(): void {
  }
  submit(){
    const newPassword = this.newPassword
    const email = this.atuh.email;
    this.atuh.resetPassword(email,newPassword).subscribe(
      (res:any)=>{
        if(this.newPassword=== this.confirmPassword){
          alert('Password reset successfully')
          this.route.navigate(['/login'])
        }
        else {
          alert('Passwords do not match. Please check and try again.');
        }
        },
        (err) => {
          console.error('Verification error:', err.error);
          alert('Password not updated');
       }
    )
  }
}
