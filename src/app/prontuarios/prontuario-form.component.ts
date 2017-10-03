import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { PerguntaBase, PerguntaTextbox, PerguntaDropdown, GrupoDePerguntas } from '../formgen';

import { FormgenService } from '../formgen/formgen-service';

@Component({
  selector: 'ipesq-prontuario-form',
  templateUrl: './prontuario-form.component.html',
  styleUrls: ['./prontuario-form.component.css']
})
export class ProntuarioFormComponent implements OnInit {
  payLoad = '';
  form: FormGroup;

  perguntas: PerguntaBase<any>[] = [
    new GrupoDePerguntas({chave: 'mae', label: 'Dados da Mãe', perguntas: [
      new PerguntaTextbox({chave: 'nome', label: 'Nome'}),
      new PerguntaTextbox({chave: 'localAcompanhamento', label: 'Local de Acompanhamento'}),
      new PerguntaTextbox({chave: 'endereco', label: 'Endereço'}),
      new PerguntaTextbox({chave: 'cidade', label: 'Cidade'}),
      new PerguntaTextbox({chave: 'pontoDeReferencia', label: 'Ponto de Referência'}),
      new PerguntaTextbox({chave: 'telefone', label: 'Telefone'}),
      new PerguntaTextbox({chave: 'telefoneContato', label: 'Telefone de Contato'}),
      new PerguntaTextbox({chave: 'dataDeNascimento', label: 'Data de Nascimento'}),
      new PerguntaTextbox({chave: 'gestacoes', label: 'Número de Gestações'}),
      new PerguntaTextbox({chave: 'nascimentos', label: 'Númmero de Nascimentos'}),
      new PerguntaTextbox({chave: 'abortos', label: 'Número de Abortos'}),
      new PerguntaTextbox({chave: 'peso', label: 'Peso (g)'}),
      new PerguntaTextbox({chave: 'altura', label: 'Altura (cm)'}),
      new PerguntaTextbox({chave: 'primeiraUltrassom', label: 'Quanto foi a primeira ultrassom ?'}),
      new PerguntaTextbox({chave: 'ultimaUltrassom', label: 'Quando foi a última ultrassom ?'}),
      new PerguntaTextbox({chave: 'idadeGestacionalAdmissaoProjeto', label: 'Idade gestacional na admissão do projeto'}),
      new GrupoDePerguntas({chave: 'enxatema', label: 'Exantema', perguntas: [
        new PerguntaTextbox({chave: 'historiaEnxatema', label: 'História de exantema ?'}),
        new PerguntaTextbox({chave: 'trimestre', label: 'Trimestre'}),
        new PerguntaTextbox({chave: 'mes', label: 'Mês'}),
        new PerguntaTextbox({chave: 'idadeGestacionalEnxatemaMes', label: 'Idade gestacional exantema (mês)'}),
        new PerguntaTextbox({chave: 'idadeGestacionalEnxatemaTrimestre', label: 'Idade gestacional exantema (trimestre)'})
      ]})  
    ]}),
    new GrupoDePerguntas({chave: 'crianca', label: 'Dados da Criança', perguntas: [
      new PerguntaTextbox({chave: 'nome', label: 'Nome'}),
      new PerguntaTextbox({chave: 'dataDeNascimento', label: 'Data de nascimento'}),
      new PerguntaTextbox({chave: 'tipoDeParto', label: 'Tipo de parto'}),
      new PerguntaTextbox({chave: 'idadeGestacionalParto', label: 'Idade gestacional no parto'}),
      new PerguntaTextbox({chave: 'condicaoNascimento', label: 'Condição de nascimento'}),
      new PerguntaTextbox({chave: 'maFormacao', label: 'Má formação'}),
      new PerguntaTextbox({chave: 'peso', label: 'Peso (g)'}),
      new PerguntaTextbox({chave: 'estatura', label: 'Altura (cm)'}),
      new PerguntaTextbox({chave: 'pc', label: 'PC'}),
      new PerguntaTextbox({chave: 'apgar1M', label: 'Apgar após 1 minuto'}),
      new PerguntaTextbox({chave: 'apgar5M', label: 'Apgar após 5 minutos'})
    ]})
  ];

  constructor(private formgen: FormgenService) {}
  
  ngOnInit() {
    this.form = this.formgen.toFormGroup(this.perguntas);
  }
    
  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }
}