import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user.interface';
import { AuthService } from 'src/app/services/auth.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  enteredError: Boolean = false;
  signInError = '';
  constructor(
    private authServ: AuthService,
    private location: Location,
  ) {}

  ngOnInit(): void {}

  signin(form: any) {
    let data: User = form.value;
    this.authServ
      .signin(data.email, data.password)
      .catch((error) => {
        this.enteredError = true;
        this.signInError = 'bad login information';
      })
      .then((t) => {
        if (!this.enteredError) this.location.back();
      });
  }
}
