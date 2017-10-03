import { Component } from '@angular/core';
import { Router } from '@angular/router'; 

import { PageScrollConfig } from 'ng2-page-scroll';

import { AutenticacaoService } from './services/autenticacao.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  carregando = false;

  constructor(private router: Router, private autenticacaoService: AutenticacaoService) {
    PageScrollConfig.defaultScrollOffset = 64;
    PageScrollConfig.defaultDuration = 200;
  }

  sair() {
    this.carregando = true;
    this.autenticacaoService.logout().subscribe(() => {
      this.carregando = false;
      this.router.navigate(['/login']);
    });
  }
}
