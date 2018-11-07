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
  senhaFixa = 'adm';
  email = '';
  senha = '';
  adm = 'administrador';

  ngOnInit() {
    this.login = false;
  }

  sumirLogin() {
    if (this.emailFixo === this.email && this.senhaFixa === this.senha || this.adm === this.email) {
      this.login = true;
    } else {
alert('teste');
    }
  }

  deslogar() {
    this.login = false;
  }

}
