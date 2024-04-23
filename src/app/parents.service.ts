import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParentsService {
  baseURL:string='http://localhost:3000/parents'

  constructor(private parents:HttpClient) { }
  getAllParents(){
    const url = `${this.baseURL}/all`;
    return this.parents.get(url)
  }
  editParent(id: string,data:any){
    const url = `${this.baseURL}/${id}`;
return this.parents.patch(url,data)
  }
  getParentById(id: string) {
    const url = `${this.baseURL}/${id}`;
    return this.parents.get(url);
  }

}
