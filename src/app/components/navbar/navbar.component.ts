import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { textChangeRangeIsUnchanged } from 'typescript';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  isOpen: boolean = false;
  isUser: boolean = false;
  isAdmin: boolean = false;
  constructor(private auhtServ: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.auhtServ.user.subscribe((user) => {
      if (user) this.isUser = true;
      else this.isUser = false;
      this.auhtServ.userData.subscribe((data) => {
        this.isAdmin = data.isadmin;
      });
    });
  }

  toggleNav() {
    this.isOpen = !this.isOpen;
  }

  logout() {
    this.auhtServ.logout().then(() => {
      this.router.navigate(['/']);
    });
  }
}
