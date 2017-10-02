import { Usuario } from './usuario';
import { Prontuario } from './prontuario';

export class ServicoSaude {
  tipo: string;
  descricao: string;
  identificacao: string;
  municipio: string;
  prontuario: string;
  responsavel: string
}

export class IdadeGestacional {
  semanas: number;
  dias: number;
  classificacao: string
}

export class ExameFisicoAoNascer {
  peso: number;
  estatura: number;
  perimetroCefalico: number;
  perimetroToracico: number;
  apgar1Min: number;
  apgar5Min: number;
  apgar10Min: number
}

export class Malformacoes {
  possui: boolean;
  aparelhoCirculatorio: boolean;
  aparelhoRespiratorio: boolean;
  aparelhoDigestivo: boolean;
  orgaosGenitais: boolean;
  aparelhoOsteomuscular: boolean;
  descricao: string
}

export class OutrosAchadosClinicos {
  possui: boolean;
  ictericia: boolean;
  anemia: boolean;
  esplenomegalia: boolean;
  alteracoesOsseas: boolean;
  choroAoManuseio: boolean;
  hidropsia: boolean;
  riniteMucoSanguinolenta: boolean;
  hepatomegalia: boolean;
  lesoesCutaneas: boolean;
  pseudoparalisia: boolean;
  petequias: boolean;
  plaquetopenia: boolean;
  convulsoes: boolean;
  outras: string
}

export class Hemograma {
  primeiro: boolean;
  data: Date;
  hb: number;
  ht: number;
  leucocitos: number;
  bastonetes: number;
  segmentados: number;
  monocitos: number;
  linfocitos: number;
  plaquetas: number;
  glicose: number;
  idadeRealizacao: number
}

export class PuncaoLiquorica {
  primeiro: boolean;
  data: Date;
  aspecto: string;
  hemacias: number;
  leucocitos: number;
  bastonetes: number;
  segmentados: number;
  monocitos: number;
  linfocitos: number;
  proteinas: number;
  cloreto: number;
  glicose: number;
  idadeRealizacao: number
}

export class DadosExame {
  amostra: string;
  data: Date;
  igm: number;
  igg: number;
  pcr: number
}

export class ExameEtiologico {
  agente: string;
  dados: DadosExame[]
}

export class ExameCraniano {
  possui: boolean;
  nome: string;
  data: Date;
  normal: boolean;
  calcificacoes: boolean;
  lisencefalia: boolean;
  atrofiaCerebral: boolean;
  ventriculomegalia: boolean;
  suturasCalcificadas: boolean;
  outras: string
}

export class Exame {
  possui: boolean;
  nome: string;
  data: Date;
  alteracao: boolean;
  descricao: string
}

export class RecemNascido {
  dataParto: Date;
  sexo: string;
  idadeGestacional: IdadeGestacional;
  gemelar: string;
  tipoParto: string;
  danoPerinatalAnoxico: boolean;
  danoPerinatalIsquemico: boolean;
  danoPerinatalHemorragico: boolean;
  danoPerinatalTraumatico: boolean;
  danoPerinatalOutro: boolean;
  outroDanoPerinatal: string;
  exameFisicoAoNascer: ExameFisicoAoNascer;
  malformacoes: Malformacoes;
  outrosAchadosClinicos: OutrosAchadosClinicos;
  hemograma: Hemograma;
  puncaoLiquorica: PuncaoLiquorica;
  examesEtiologicos: ExameEtiologico[];
  examesCranianos: ExameCraniano[];
  exames: Exame[];
}

export class Endereco {
  estado: string;
  municipio: string;
  logradouro: string;
  numero: string;
  bairro: string;
  telefones: string
}

export class Viagem {
  dataDeIda: Date;
  dataDeVolta: Date;
  pais: string;
  estado: string;
  municipio: string
}

export class Antecedente {
  antecedente: string;
  possui: boolean;
  descricao: string;
  mes: number
}

export class DoencaPreexistente {
  possui: boolean;
  diabetes: boolean;
  outrasDoencasMetabolicas: boolean;
  hipertensaoAterial: boolean;
  cardiopatiaCronica: boolean;
  doencaRenalCronica: boolean;
  pneumopatiasCronicas: boolean;
  hemoglobinopatia: boolean;
  cancer: boolean;
  doencaAutoImune: boolean;
  doencaNeuroleptica: boolean;
  outras: string
}

export class TratamentoDST {
  possui: boolean;
  hiv: boolean;
  sifilis: boolean;
  gonorreia: boolean;
  clamidia: boolean;
  hepatitesBC: boolean;
  herpesSimples: boolean;
  outras: string
}

export class HistoricoObstetricio {
  primeiraGestacao: boolean;
  quantasVezesEngravidou: number;
  quantosNascidosVivos: number;
  quantosNascidosMortos: number;
  jaAbortou: boolean;
  quantosAbortos: number;
  jaTeveFilhosComMalFormacaoCongenita: boolean;
  quaisFilhosComMalFormacaoCongenita: string;
  dataNascimentoUltimoFilho: Date
}

export class ContatoSubstancia {
  teveContato: boolean;
  detalhe: string
}

export class ContatoRaioX {
  teveContato: boolean;
  primeiroTrimestre: boolean;
  segundoTrimestre: boolean;
  terceiroTrimestre: boolean
}

export class UsoDeMedicamento {
  nome: string;
  dataInicioTratamento: Date
}

export class DuranteGestacao {
  contatoComPesticidas: ContatoSubstancia;
  contatoComAgrotoxicos: ContatoSubstancia;
  contatoProdutoQuimico: ContatoSubstancia;
  contatoRaioX: ContatoRaioX;
  medicamentos: UsoDeMedicamento[];
}

export class HistoricoManchasVermelhas {
  trimestre: number;
  apresentouManchas: boolean;
  dataInicioEnxatema: Date;
  duracaoEmDias: number;
  localDeInicio: string;
  espalhou: boolean;
  espalhouParaOnde: string;
  febre: boolean;
  febreTemperatura: number;
  prurido: boolean;
  tosse: boolean;
  coriza: boolean;
  cefaleia: boolean;
  mialgia: boolean;
  artralgia: boolean;
  artralgiaTempo: number;
  linfoadenopatia: boolean;
  hiperemiaConjuntival: boolean;
  vomitos: boolean;
  dorRetroorbital: boolean;
  outros: string;
  surgimentoDoRash: string;
  atendimentoMedico: boolean;
  hipoteseDiagnostica: string;
  tomouRemedio: boolean;
  remedios: string
}

export class UsoDeAlcool {
  fezUsoDuranteGestacao: boolean;
  frequenciaSemanal: string;
  doses: string;
  frequenciaMaisDeTresDoses: string
}

export class Tabagismo {
  relacaoComCigarro: string;
  fumaDiariamenteHaQuantosAnos: number;
  parouDeFumarHa: number;
  parouDeFumarUnidadeDeTempo: string
}

export class DrogasIlicitas {
  nome: string;
  frequencia: string
}

export class Habitos {
  usoDeAlcool: UsoDeAlcool;
  tabagismo: Tabagismo;
  usoDeDrogas: DrogasIlicitas[];
}

export class Vacina {
  nome: string;
  numeroDeDoses: number;
  dataDoses: Date[];
}

export class Complicacoes {
  teveComplicacoes: boolean;
  infeccaoTratoUrinario: boolean;
  anemia: boolean;
  diabetesGestacional: boolean;
  hipertensaoAterial: boolean;
  preeclampsia: boolean;
  placentaPrevia: boolean;
  oligodramnio: boolean;
  polidramnio: boolean;
  insuficienciaColoUterino: boolean;
  hiperemeseGravitica: boolean;
  anomaliasAnatomicasUtero: boolean;
  deslocamentoPlacenta: boolean;
  crescimentoIntrauterinoRestrito: boolean;
  incisura: boolean;
  outras: string
}

export class Ultrassom {
  data: Date;
  idadeGestacional: number;
  perimetroCefalico: number;
  microcefalia: boolean;
  calcificacoes: boolean;
  ventriculomegalia: boolean;
  outrosAchados: string;
  dbp: number;
  femur: number;
  circunferenciaAbdominal: number;
  peso: number
}

export class ResultadoExamePreNatal {
  realizado: boolean;
  data: Date;
  resultado: string
}

export class ExamePreNatal {
  nome: string;
  primeiroTrimestre: ResultadoExamePreNatal;
  segundoTrimestre: ResultadoExamePreNatal;
  terceiroTrimestre: ResultadoExamePreNatal
}

export class DoencasInfectoContagiosas {
  trimestre: number;
  toxoplasmose: boolean;
  rubeola: boolean;
  citomegalovirus: boolean;
  sifilis: boolean;
  herpesSimples: boolean;
  parvovirus: boolean;
  hiv: boolean;
  dengue: boolean;
  chikungunya: boolean;
  zikaVirus: boolean;
  outras: string
}

export class VRDLSifilis {
  titulo: string;
  recebeuTratamento: boolean;
  dataInicioTratamento: Date;
  parceiroTratadoConcomitante: boolean
}

export class PreNatal {
  realizouPreNatal: boolean;
  unidadeDeSaude: string;
  municipio: string;
  consultasPrimeiroTrimestre: number;
  consultasSegundoTrimestre: number;
  consultasTerceiroTrimestre: number;
  dataPrimeiraConsulta: Date;
  idadeGestacionalPrimeiraConsulta: number;
  pesoInicioGestacao: number;
  pesoFinalGestacao: number;
  altura: number;
  historicoVacinal: Vacina[];
  complicacoes: Complicacoes;
  examesUltrassom: Ultrassom[];
  exames: ExamePreNatal[];
  diagnosticoDoencasInfectoContagiosas: boolean;
  doencasInfectoContagiosas: DoencasInfectoContagiosas[];
  vrdl: VRDLSifilis[];
}

export class Mae {
  nome: string;
  dataDeNascimento: Date;
  idade: number;
  raca: string;
  etnia: string;
  escolaridade: string;
  estadoCivil: string;
  ocupacao: string;
  pessoasQueMoramNaCasa: number;
  rendaFamiliarMensal: number;
  enderecoAtual: Endereco;
  morouEmOutroEndereco: boolean;
  outroEndereco: Endereco;
  viagens: Viagem[];
  antecedentes: Antecedente[];
  doencasPreexistentes: DoencaPreexistente;
  tratamentosDST: TratamentoDST;
  historicoObstetricio: HistoricoObstetricio;
  duranteGestacao: DuranteGestacao;
  teveManchasVermelhas: boolean;
  historicoManchasVermelhas: HistoricoManchasVermelhas[];
  habitos: Habitos;
  prenatal: PreNatal;
}

export class EncerramentoCaso {
  statusInvestigacao: string;
  classificacaoFinal: string;
  etiologiaProvavel: string;
  hdRelacionada: string;
  evolucao: string;
  dataEvolucao: Date;
  observacoes: string;
}

export class Investigador {
  inicioInvestigacao: Date;
  investigadorInicio: string;
  fimInvestigacao: Date;
  investigadorFim: string;
}

export class Questionario {
  servicoSaude: ServicoSaude;
  recemNascido: RecemNascido;
  mae: Mae;
  encerramentoCaso: EncerramentoCaso;
  investigador: Investigador;
  createdAt: Date;
  updatedAt: Date;
  prontuario: Prontuario;
  owner: Usuario;
}