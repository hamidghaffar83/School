import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {
  email!: string;

  constructor(private auth:AuthService, private route: Router) { }

  ngOnInit(): void {
  }
  submit(email:string){
    this.auth.forgetPassword(email).subscribe(
      (res:any)=>{
        this.route.navigate(['/otp'])
      },
      (err:any) => {
        console.error('email:', err);
        alert(err.error.message);
      }
      );
    this.auth.email = this.email
  }
}
