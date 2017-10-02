import { Prontuario } from './prontuario';
import { Usuario } from './usuario';

export class  GMFM {
  data: Date;
  nivelI: number;
  nivelII: number;
  nivelIII: number;
  nivelIV: number;
  nivelV: number;
  score88: number;
  dimensaoA: number;
  dimensaoB: number;
  dimensaoC: number;
  dimensaoD: number;
  dimensaoE: number;
  score66: number;
  erroPadrao: number;
  indiceDeConfianca: number;
  createdAt: Date;
  updatedAt: Date;
  prontuario: Prontuario;
  owner: Usuario;
}