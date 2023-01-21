import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  obj: any;
  loginRes: any={};
 // user:Login | undefined

  constructor(private service:AuthService,private router:Router) { }

  loginForm=new FormGroup({
    email:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required]),
  })

  get Email() : FormControl{
    return this.loginForm.get('email') as FormControl;
  }
  get Password() : FormControl{
    return this.loginForm.get('password') as FormControl;
  }


  loginPage(){
    if(this.loginForm.valid){
    const loginData=this.loginForm.value;
     this.service.loginUser(this.loginForm.value).subscribe(res=>{
       const userData=res.filter((obj1:any,i: any)=>{
        const mainData= obj1.email === loginData.email && obj1.password ===loginData.password;
        
        return mainData;
      }); 
      
      //localStorage.setItem("USER",userData);
       console.log(userData);
       if(userData.length > 0){
        this.router.navigate(['admin']);
       
        alert("login Successfully")
      }else{
        alert("login failed")
      }
     
    })}else{
      this.validateAllForm(this.loginForm);
      alert("Form Invalid")
    }
  }

  private validateAllForm(formGroup:FormGroup){
    Object.keys(formGroup.controls).forEach(field=>{
      const control=formGroup.get(field);
      if(control instanceof FormControl){
        control.markAsDirty({onlySelf:true});
      }else if(control instanceof FormGroup){
        this.validateAllForm(control);
      }
    })
  }


  ngOnInit(): void {
  }

}
