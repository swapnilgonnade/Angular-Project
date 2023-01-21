import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  base_url="http://localhost:3000/User"

  //isLoggedIn= new BehaviorSubject<boolean>(false);
  constructor(private http:HttpClient) { }

  signUpUser(user:any){
   return this.http.post(`${this.base_url}`,user);
  }

  loginUser(user:any){
    return this.http.get<any>(`${this.base_url}`)
  }


  //For Auth guard User
  // isLoginUser(user:any){
  //   return this.http.get<any>(this.base_url,
  //   user,
  //     {observer:"response"}).subscribe((result)=>{
  //         if(result){
  //           this.isLoggedIn.next(true);
  //         }
  //   })
  // }
}
