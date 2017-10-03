import { PerguntaBase } from './pergunta-base';

export class PerguntaNumero extends PerguntaBase<Number> {
  tipoControle = 'numero';
  min: Number;
  max: Number;
  step: Number;

  constructor(opcoes: {} = {}) {
    super(opcoes);
    this.min  = 'min'  in opcoes ? opcoes['min']  : 0;
    this.max  = 'max'  in opcoes ? opcoes['max']  : undefined;
    this.step = 'step' in opcoes ? opcoes['step'] : 1;
  }
}