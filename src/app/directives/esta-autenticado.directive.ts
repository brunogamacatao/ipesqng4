import { Directive, TemplateRef, ViewContainerRef } from '@angular/core';

import { AutenticacaoService } from '../services/autenticacao.service';

@Directive({
  selector: '[ipesqEstaAutenticado]'
})
export class EstaAutenticadoDirective {
  private hasView = false;

  constructor(
    private autenticacaoService: AutenticacaoService,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef) {
    this.verificaSessao();
    this.autenticacaoService.sessaoObservable.subscribe(usuario => this.verificaSessao());
  }

  verificaSessao() {
    if (this.autenticacaoService.isLoggedIn()) {
      this.exibirConteudo();
    } else {
      this.removerConteudo();
    }
  }

  exibirConteudo() {
    if (!this.hasView) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.hasView = true;
    }
  }

  removerConteudo() {
    if (this.hasView) {
      this.viewContainer.clear();
      this.hasView = false;
    }
  }
}
