import { PerguntaBase } from './pergunta-base';

export class PerguntaSimnao extends PerguntaBase<boolean> {
  tipoControle = 'simnao';

  constructor(opcoes: {} = {}) {
    super(opcoes);
  }
}