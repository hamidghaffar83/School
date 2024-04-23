import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userName!: string;
  password!: string;

  constructor(private auth:AuthService, private route: Router) { }

  ngOnInit(): void {
  }
  loginData(credentials:any){
    this.auth.login(credentials).subscribe(
      (res:any)=>{
        alert('login Successfully.')
        localStorage.setItem("token",res.data.token);
        this.route.navigate(['/profile'])
      }
    ),
    (err:any) => {
      alert(err.error.message);
      console.error('login:', err)
  }
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
