import { Injectable }   from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { PerguntaBase } from './pergunta-base';

@Injectable()
export class FormgenService {
  constructor() {}

  toFormGroup(perguntas: PerguntaBase<any>[]) {
    let group: any = {};

    perguntas.forEach(pergunta => group[pergunta.chave] = pergunta.toFormControl());

    return new FormGroup(group);
  }
}