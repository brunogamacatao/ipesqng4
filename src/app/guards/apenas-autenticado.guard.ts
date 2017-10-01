import { Injectable } from '@angular/core';
import { Router } from '@angular/router'; 
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { AutenticacaoService } from '../services/autenticacao.service';

@Injectable()
export class ApenasAutenticadoGuard implements CanActivate {
  constructor(
    private router: Router,
    private autenticacaoService: AutenticacaoService
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    console.log('verificando se pode ir para a rota ...');

    if (this.autenticacaoService.isLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
