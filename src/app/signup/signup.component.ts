import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  userName!: string;
  name!: string;
  email!: string;
  phone!: Number;
  password!: string;


  constructor(private signup: AuthService,
    private route:Router) { }

  ngOnInit(): void {
  }
  signUp(){
    const userData = {
      userName: this.userName,
      name: this.name,
      email: this.email,
      phone: this.phone,
      password: this.password

    };
    this.signup.signup(userData).subscribe(
      (res:any)=>{
        alert('User created Successfully.');
        this.route.navigate(['/otp'], { queryParams: { isSignup: true } });
      },
      (err) => {
        
        console.error('Signup error:', err);
        alert(err.error.message);
      }
  );

  this.signup.email = userData.email;
}
  passwordShow() {
    const passwordInput = document.getElementById('password') as HTMLInputElement;

    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
    } else {
      passwordInput.type = 'password';
    }
}
}
