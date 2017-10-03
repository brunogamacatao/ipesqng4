import { PerguntaBase } from './pergunta-base';

export class PerguntaData extends PerguntaBase<Date> {
  tipoControle = 'data';

  constructor(opcoes: {} = {}) {
    super(opcoes);
  }
}