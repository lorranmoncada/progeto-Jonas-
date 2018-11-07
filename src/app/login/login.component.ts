import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  login: boolean;
  emailFixo = 'ecilag@hotmail.com';
  senhaFixa = 'teste91187942';
  email = '';
  senha = '';

  ngOnInit() {
    this.login = false;
  }

  sumirLogin() {
    if (this.emailFixo === this.email && this.senhaFixa === this.senha) {
      this.login = true;
    }
  }

  deslogar() {
    this.login = false;
  }

}
