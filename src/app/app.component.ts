import { Component } from '@angular/core';
import { Router } from '@angular/router'; 

import { AutenticacaoService } from './services/autenticacao.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  carregando = false;

  constructor(private router: Router, private autenticacaoService: AutenticacaoService) {}

  sair() {
    this.carregando = true;
    this.autenticacaoService.logout().subscribe(() => {
      this.carregando = false;
      this.router.navigate(['/login']);
    });
  }
}
