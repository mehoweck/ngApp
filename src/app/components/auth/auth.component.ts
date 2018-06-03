import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private authService: AuthService) {

  }

  ngOnInit() {
  }

  logIn(loginform) {
    console.log('valid:' + loginform.valid);
    console.log(loginform.value);
    this.authService.logIn(loginform.value);
  }

}
