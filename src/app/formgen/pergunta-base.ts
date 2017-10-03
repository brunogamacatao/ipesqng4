import { AbstractControl, FormControl, Validators } from '@angular/forms';

export abstract class PerguntaBase<T> {
  valor: T;
  chave: string;
  label: string;
  requerida: boolean;
  ordem: number;
  tipoControle: string;

  constructor(opcoes: {
    valor?: T,
    chave?: string,
    label?: string,
    requerida?: boolean,
    ordem?: number,
    tipoControle?: string
  } = {}) {
    this.valor        = opcoes.valor;
    this.chave        = opcoes.chave || '';
    this.label        = opcoes.label || '';
    this.requerida    = !!opcoes.requerida;
    this.ordem        = opcoes.ordem === undefined ? 1 : opcoes.ordem;
    this.tipoControle = opcoes.tipoControle || '';
  }

  toFormControl(): AbstractControl {
    return this.requerida ? 
      new FormControl(this.valor || '', Validators.required) :
      new FormControl(this.valor || '');

  }
}