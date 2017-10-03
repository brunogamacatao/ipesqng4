import { Component, Input } from '@angular/core';
import { FormGroup }        from '@angular/forms';

import { PerguntaBase }     from './pergunta-base';

@Component({
  selector: 'ipesq-pergunta',
  templateUrl: './pergunta.component.html',
  styleUrls: ['./pergunta.component.css'],
})
export class PerguntaComponent {
  @Input() pergunta: PerguntaBase<any>;
  @Input() form: FormGroup;
  
  get isValid() { 
    return this.form.controls[this.pergunta.chave].valid;
  }
}