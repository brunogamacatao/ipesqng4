import { Component, Input, OnInit }  from '@angular/core';
import { FormGroup }                 from '@angular/forms';

import { PerguntaBase } from './pergunta-base';

@Component({
  selector: 'ipesq-formgen',
  templateUrl: './formgen.component.html',
  styleUrls: ['./formgen.component.css']
})
export class FormgenComponent {
  @Input() perguntas: PerguntaBase<any>[] = [];
  @Input() form: FormGroup;
}
