import { PerguntaBase } from './pergunta-base';

export class PerguntaTextbox extends PerguntaBase<string> {
  tipoControle = 'textbox';
  tipo: string;

  constructor(opcoes: {} = {}) {
    super(opcoes);
    this.tipo = opcoes['tipo'] || '';
  }
}