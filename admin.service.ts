import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  constructor(private http:HttpClient) { }
 base_url="http://localhost:3000/User"

  userData(){
    return this.http.get(`${this.base_url}`);

  }

}
