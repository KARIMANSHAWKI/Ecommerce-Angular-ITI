import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  
  constructor(
    private authServ: AuthService,
    private userServ: UserService,
    private router: Router
  ) {}

  afterSubmitErrorMessage: String = '';

  ngOnInit(): void {}

  signup(form: any) {
    let data: User = form.value;
    this.authServ
      .signup(data.email, data.password)
      .then((result: any) => {
        this.userServ
          .addNewUser(result.user?.uid, data?.name, data?.address)
          .then(() => {
            this.afterSubmitErrorMessage = '';
            this.router.navigate(['/']);
          });
      })
      .catch((err: any) => {
        this.afterSubmitErrorMessage = err.message;
      });
  }
}
