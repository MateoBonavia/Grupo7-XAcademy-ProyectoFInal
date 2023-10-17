import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private router: Router) {}

  btn = localStorage.getItem('token') ? 'Log out' : 'Login';

  btnFunction = () => {
    if (localStorage.getItem('token')) {
      localStorage.removeItem('token');
      window.location.reload();
    } else {
      this.router.navigate(['login']);
    }
  };
  ngOnInit(): void {}
}
