import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseurl:string = 'http://localhost:3000/auth/';
  private token: string | null = null;
  response: any;
  email: string = '';


  constructor(private http:HttpClient, private route:Router) { }
  signup(user:any){
const url = `${this.baseurl}signup`;
return this.http.post(url,user)
  }
  verifyOtp(email:string,otp:number): Observable<any> {
    const url = `${this.baseurl}otp`;
    const payload = {
      email: email,
      otp: otp
    }
    return this.http.post(url,payload)
  }
  login(credentials:any){
    const url = `${this.baseurl}login`;
    return this.http.post(url,credentials)
  }
  forgetPassword(email:string){
    const url = `${this.baseurl}email`
    return this.http.post(url,email)
  }
  resetPassword(email:string,newPassword:string): Observable<any>{
    const url = `${this.baseurl}password`;
    const payload = {
      email:email,
      newPassword: newPassword
    }
    return this.http.post(url,payload)
  }
  setToken(token: string): void {
    console.log('Setting token:', token);
    this.token = token;
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    if (!this.token) {
      this.token = localStorage.getItem('token');
    }
    return this.token;
  }

  logout(): any {
    this.token = null;
    localStorage.removeItem('token');
  }
}
