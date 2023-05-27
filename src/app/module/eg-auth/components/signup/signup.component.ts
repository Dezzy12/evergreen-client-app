import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/service/auth.service';
import { LocalStorageUtils } from 'src/app/utils/local-storage.utils';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  formGroup! : FormGroup
  message!: string 

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService,
    ) { }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      username: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      address: new FormControl(''),
      password: new FormControl(''),
      confirmPassword: new FormControl('')
    });
  }

  navigateToLogin() {
    this.router.navigate(['auth/signin']);
  }

  register = () => {
    const formData:User={
      username:this.formGroup.get(['username'])?.value,
      email:this.formGroup.get(['email'])?.value,
      address:this.formGroup.get(['address'])?.value,
      password:this.formGroup.get(['password'])?.value,
    }
    console.log(formData);
  
    this.authService.register(formData).subscribe({
      next:response =>{
        LocalStorageUtils.writeToken(response.token);
        this.router.navigate(['/auth/signin']);
      },
      error: err => {
        console.log(err);
        this.message = "Error Signing Up: " + err

      }
    })
  }
  isValid(): boolean {
    return this.formGroup.get("password")?.value == this.formGroup.get("confirmPassword")?.value;
  }
  
  

}
