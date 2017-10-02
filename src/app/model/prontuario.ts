import { Usuario } from './usuario';

export class Enxatema {
  historiaEnxatema: boolean;
  trimestre: string;
  mes: string;
  idadeGestacionalEnxatemaMes: string;
  idadeGestacionalEnxatemaTrimestre: string
}

export class Mae {
  nome: string;
  localAcompanhamento: string;
  endereco: string;
  cidade: string;
  pontoDeReferencia: string;
  telefone: string;
  telefoneContato: string;
  dataDeNascimento: string;
  gestacoes: number;
  nascimentos: number;
  abortos: number;
  peso: number;
  altura: number;
  primeiraUltrassom: string;
  ultimaUltrassom: string;
  idadeGestacionalAdmissaoProjeto: string;
  enxatema: Enxatema
}

export class Crianca {
  nome: string;
  dataDeNascimento: string;
  tipoDeParto: string;
  idadeGestacionalParto: number;
  condicaoNascimento: string;
  maFormacao: string;
  peso: number;
  estatura: number;
  pc: string;
  apgar1M: number;
  apgar5M: Number
}

export class Prontuario {
  mae: Mae;
  crianca: Crianca;
  createdAt: Date;
  updatedAt: Date;
  owner: Usuario;
}