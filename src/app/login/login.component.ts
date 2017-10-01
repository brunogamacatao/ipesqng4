import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { AutenticacaoService } from '../services/autenticacao.service';

@Component({
  selector: 'ipesq-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string;
  password: string;
  mensagemDeErro: string;
  carregando = false;

  constructor(
    private autenticacaoService: AutenticacaoService,
    private router: Router) { }

  login() {
    this.carregando = true;

    this.autenticacaoService
      .login(this.username, this.password)
      .subscribe((usuario) => {
        if (usuario) {
          this.mensagemDeErro = null;
          this.router.navigate(['/dashboard']);
        } else {
          this.mensagemDeErro = 'Nome de usuário ou senha incorretos';
        }
        this.carregando = false;
      }, (erro) => {
        this.mensagemDeErro = 'Nome de usuário ou senha incorretos';
        this.carregando = false;
      });
  }
}
