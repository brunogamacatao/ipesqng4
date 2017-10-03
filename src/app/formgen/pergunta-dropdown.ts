import { PerguntaBase } from './pergunta-base';

export class PerguntaDropdown extends PerguntaBase<string> {
  tipoControle = 'dropdown';
  opcoes: {chave: string, valor: string}[] = [];

  constructor(opcoes: {} = {}) {
    super(opcoes);
    this.opcoes = opcoes['opcoes'] || [];
  }
}