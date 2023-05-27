import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserLogin } from 'src/app/models/user.model';
import { AuthService } from 'src/app/service/auth.service';
import { LocalStorageUtils } from 'src/app/utils/local-storage.utils';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  formGourp! : FormGroup
  message! : string

  constructor(
    private router:Router,
    private fb: FormBuilder, //Creates a new Form, FormGroup or Array
    private authService:AuthService,

    ) { }

  ngOnInit(): void {
    this.formGourp = this.fb.group(
     {
      username: new FormControl(''),   
      password: new FormControl('')
     } 
    )
  }
  navigateToSignup() {
    this.router.navigate(['auth/signup']);
    }

  login = () => {
    const formData:UserLogin={
      username:this.formGourp.get(['username'])?.value,
      password:this.formGourp.get(['password'])?.value
    }
    console.log(formData);

    this.authService.login(formData).subscribe({
      next: response => { // Activities after user login
        LocalStorageUtils.writeToken(response.token)
        this.router.navigate(['/user/discover']);
      },
      error: err => {
        console.log(err);
        this.message = "Error logging in: " + err
       }

    }) 
  }

}
