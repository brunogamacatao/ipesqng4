import { PerguntaBase } from './pergunta-base';

import { AbstractControl, FormGroup } from '@angular/forms';

export class GrupoDePerguntas extends PerguntaBase<string> {
  tipoControle = 'group';
  perguntas: PerguntaBase<any>[];

  constructor(opcoes: {
    chave?: string,
    label?: string,
    perguntas?: PerguntaBase<any>[]
  } = {}) {
    super(opcoes);
    this.perguntas = opcoes.perguntas || [];
  }

  toFormControl(): AbstractControl {
    let group: any = {};   
    this.perguntas.forEach(pergunta => group[pergunta.chave] = pergunta.toFormControl());
    return new FormGroup(group);
  }
}