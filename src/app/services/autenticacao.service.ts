import { Injectable } from '@angular/core';

import { Http, Headers, Response } from '@angular/http';

import { Observable } from 'rxjs';
import { Subject }    from 'rxjs/Subject';
import 'rxjs/add/operator/map';

import { Usuario } from '../model/usuario';

const URL_BASE: string = 'http://45.79.104.38/user';

@Injectable()
export class AutenticacaoService {
  usuario: Usuario;
  token: string;

  private sessaoSource = new Subject<Usuario>();
  sessaoObservable = this.sessaoSource.asObservable();

  constructor(private http: Http) {
  }

  login(username: string, password: string): Observable<Usuario> {
    let url = URL_BASE + '/login';

    return this.http.post(url, { username, password })
    .map((response: Response) => {
      let data = response.json();
      let token = data.token;

      if (token) {
        this.setTokenUsuario(token, {nome: data.nome, admin: data.admin, username: data.username} as Usuario);
      } else {
        this.setTokenUsuario(null, null);
      }

      return this.usuario;
    })
    .catch(erro => {
      this.sessaoSource.next(null);
      return Observable.throw(erro);
    });
    
  }

  isLoggedIn(): boolean {
    if (this.isNotEmpty(this.token) || this.recuperaTokenUsuario()) return true;
    return false;
  }

  logout(): Observable<boolean> {
    let url = URL_BASE + '/logout';

    return this.http.get(url)
    .map((response: Response) => {
      this.setTokenUsuario(null, null);
      return true;
    });
  }

  private setTokenUsuario(token: string, usuario: Usuario): void {
    this.token = token;
    this.usuario = usuario;

    if (token && usuario) {
      sessionStorage.setItem('token', token);
      sessionStorage.setItem('usuario', JSON.stringify(usuario));
    } else {
      sessionStorage.removeItem('token');
      sessionStorage.removeItem('usuario');
    }

    this.sessaoSource.next(usuario);
  }

  private recuperaTokenUsuario(): string {
    let token = sessionStorage.getItem('token');

    if (this.isNotEmpty(token)) {
      this.token = token;
      this.usuario = JSON.parse(sessionStorage.getItem('usuario'));
      this.sessaoSource.next(this.usuario);
    }

    return this.token;
  }

  private isNotEmpty(str: string): boolean {
    return str !== null && str !== undefined && str.length > 0 && str !== 'null';
  }
}
