import { Prontuario } from './prontuario';
import { Usuario } from './usuario';

export class Exame {
  nome: string;
  data: Date;
  idadeGestacional: number;
  local: string;
  imagemSalva: boolean;
  reducaoVolumetrica: boolean;
  paquigiria: boolean;
  lisencefalia: boolean;
  ventriculomegalia: boolean;
  hidrocefalia: boolean;
  ventriculomegaliaSevera: boolean;
  calcificacoes: boolean;
  localDasCalcificacoes: string;
  corpoCaloso: string;
  malformacoesCisticas: boolean;
  localCistos: string;
  hipoplasiaDoCerebelo: boolean;
  hipoplasiaDoVermis: boolean;
  hipoplasiaDoTronco: boolean;
  hipoplasiaDaPonte: boolean;
  hipoPlasiaDoHipotalamo: boolean;
  reducaoDasFontanelas: boolean;
  createdAt: Date;
  updatedAt: Date;
  prontuario: Prontuario;
  owner: Usuario
}