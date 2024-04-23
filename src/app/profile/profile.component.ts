import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  userName!: string;


  constructor(private auth: AuthService, private route: Router) { }

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    console.log(token, " token")
    if (token) {
      const tokenParts = token.split('.');
      console.log(tokenParts, " token Parts")
      if (tokenParts.length === 3) {
        const payload = JSON.parse(atob(tokenParts[1]));
        this.userName = payload.userName;
      }
    }

  }
  logout() {
    this.auth.logout();
  }


}
