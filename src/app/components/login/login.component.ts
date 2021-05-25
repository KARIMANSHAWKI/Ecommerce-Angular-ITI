import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user.interface';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private authServ: AuthService, private router: Router) {}

  ngOnInit(): void {}

  signin(form: any) {
    let data: User = form.value;
    this.authServ.signin(data.email, data.password);
    this.router.navigate(['/']);
  }
}
