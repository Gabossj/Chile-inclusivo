import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators,AbstractControl} from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formulario:FormGroup;
  email: AbstractControl;
  password:AbstractControl;

  constructor(private form:FormBuilder, private _userService: UserService, private router: Router) {
    this.formulario=this.form.group({
      email:['',[Validators.required,Validators.email]],
      password: ['', Validators.required]
    });
    this.email= this.formulario.controls['email'];  
    this.password=this.formulario.controls['password'];
   }

  ngOnInit(): void {
  }

  login(){
    const user: User = {
      email: this.email.value,
      password: this.password.value
    }

    this._userService.login(user).subscribe({
      next: (token) => {
        localStorage.setItem('token', token);
        this.router.navigate(['./inicio']);
      }
    })
  }

}