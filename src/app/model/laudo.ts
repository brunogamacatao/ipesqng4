import { Prontuario } from './prontuario';
import { Usuario } from './usuario';

export class MaterialColetado {
  sa: boolean;
  ur: boolean;
  la: boolean;
  lcr: boolean
}

export class Sintomas {
  febre: boolean;
  dorDeCabeca: boolean;
  exantema: boolean;
  conjuntivite: boolean;
  dorCorpo: boolean;
  dorRetroOrbital: boolean;
  dorArticulacoes: boolean
}

export class DadosConclusao {
  positivo: boolean;
  sg: boolean;
  ur: boolean;
  la: boolean;
  lcr: boolean
}

export class Conclusao {
  zikv: DadosConclusao;
  chikv: DadosConclusao;
  sifilis: DadosConclusao;
  rubeola: DadosConclusao;
  toxoplasmose: DadosConclusao;
  citomegalovirus: DadosConclusao;
  herpes: DadosConclusao;
  dengue: DadosConclusao
}

export class Laudo {
  nome: string;
  referente: string;
  dataInicioSintomas: Date;
  dataColeta: Date;
  dataResultado: Date;
  materialColetado: MaterialColetado;
  sintomas: Sintomas;
  metodologia: string;
  resultado: string;
  conclusao: Conclusao;
  assinatura: string;
  notas: string;
  createdAt: Date;
  updatedAt: Date;
  prontuario: Prontuario;
  owner: Usuario
}