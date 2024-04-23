import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeachersService {
  baseUrl:string = 'http://localhost:3000/teachers';
  studentUrl:string='http://localhost:3000/students'

  constructor(private http:HttpClient) { }
  createTeacher(data:any){
    const url = `${this.baseUrl}/`;
    return this.http.post(url,data)
      }
    getAllTeachers(){
      const url = `${this.baseUrl}/all`;
      return this.http.get(url)
    }
    createStudent(data:any){
      const url = `${this.studentUrl}/`;
      return this.http.post(url,data)
        }
        getAllStudent(){
          const url = `${this.studentUrl}/all`;
          return this.http.get(url)
        }
        feePay(data:any){
          const url = `${this.studentUrl}/fee`;
      return this.http.patch(url,data)
        }
        }
