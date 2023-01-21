import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private service:AuthService) { }

  profileForm = new FormGroup({
    firstName : new FormControl('',[Validators.required,Validators.pattern('[a-zA-z].*')]),
    lastName : new FormControl('',[Validators.required,Validators.pattern('[a-zA-z].*')]),
    mobile: new FormControl('',[Validators.required,Validators.pattern('[0-9]'),
                            Validators.minLength(10),Validators.maxLength(10)]),
    email : new FormControl('',[Validators.required,Validators.email]),
    password : new FormControl('',[Validators.required,Validators.minLength(4)]),
    cpassword : new FormControl('',[Validators.required,Validators.minLength(4)]),
  });


  // passwordMatchingValidator(fg:FormGroup):Validators{
  //  return fg.get('password')?.value === fg.get('cpassword')?.value ? 
  //   {notMatched:true}
  // }
    
  
    

  get FirstName(): FormControl{
    return this.profileForm.get('firstName') as FormControl;
  }

  get LastName(): FormControl{
    return this.profileForm.get('lastName') as FormControl;
  }

  get Mobile(): FormControl{
    return this.profileForm.get('mobile') as FormControl;
  }
  
  get Email(): FormControl{
    return this.profileForm.get('email') as FormControl;
  }

  get Password(): FormControl{
    return this.profileForm.get('password') as FormControl;
  }

  
  signUp(){
  
      this.service.signUpUser(this.profileForm.value).subscribe(res=>{
        console.log(res);
      });
   //   this.service.addUser( this.userData())
      this.profileForm.reset();
  }

  // userData():User{
  //   return this.user={
  //     firstName: this.FirstName.value,
  //     lastName:this.LastName.value,
  //     mobile:this.Mobile.value,
  //       email:this.Email.value,
  //       password:this.Password.value
  //   }
  // }

  ngOnInit(): void {
  }

}
