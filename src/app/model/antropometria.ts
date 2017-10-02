import { Prontuario } from './prontuario';
import { Usuario } from './usuario';

export class Antropometria {
  data: Date;
  meses: number;
  usg: number;
  peso: number;
  perimetroCraniano: number;
  circunferenciaAbdominal: number;
  perimetroToracico: number;
  pregaTricipital: number;
  pregaSubescapular: number;
  estatura: number;
  createdAt: Date;
  updatedAt: Date;
  prontuario: Prontuario;
  owner: Usuario; 
}