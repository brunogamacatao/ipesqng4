import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';

import {  PerguntaBase, 
          PerguntaTextbox, 
          PerguntaDropdown, 
          PerguntaSimnao, 
          PerguntaData, 
          PerguntaNumero,
          GrupoDePerguntas } from '../formgen';

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
      new PerguntaData({chave: 'dataDeNascimento', label: 'Data de Nascimento'}),
      new PerguntaNumero({chave: 'gestacoes', label: 'Número de Gestações'}),
      new PerguntaNumero({chave: 'nascimentos', label: 'Númmero de Nascimentos'}),
      new PerguntaNumero({chave: 'abortos', label: 'Número de Abortos'}),
      new PerguntaNumero({chave: 'peso', step: 0.01, label: 'Peso (g)'}),
      new PerguntaNumero({chave: 'altura', step: 0.01, label: 'Altura (cm)'}),
      new PerguntaTextbox({chave: 'primeiraUltrassom', label: 'Quanto foi a primeira ultrassom ?'}),
      new PerguntaTextbox({chave: 'ultimaUltrassom', label: 'Quando foi a última ultrassom ?'}),
      new PerguntaTextbox({chave: 'idadeGestacionalAdmissaoProjeto', label: 'Idade gestacional na admissão do projeto'}),
      new GrupoDePerguntas({chave: 'enxatema', label: 'Exantema', perguntas: [
        new PerguntaSimnao({chave: 'historiaEnxatema', label: 'História de exantema ?'}),
        new PerguntaNumero({dependeDe:'historiaEnxatema', chave: 'trimestre', label: 'Trimestre'}),
        new PerguntaNumero({dependeDe:'historiaEnxatema', chave: 'mes', label: 'Mês'}),
        new PerguntaNumero({dependeDe:'historiaEnxatema', chave: 'idadeGestacionalEnxatemaMes', label: 'Idade gestacional exantema (mês)'}),
        new PerguntaNumero({dependeDe:'historiaEnxatema', chave: 'idadeGestacionalEnxatemaTrimestre', label: 'Idade gestacional exantema (trimestre)'})
      ]})  
    ]}),
    new GrupoDePerguntas({chave: 'crianca', label: 'Dados da Criança', perguntas: [
      new PerguntaTextbox({chave: 'nome', label: 'Nome'}),
      new PerguntaTextbox({chave: 'dataDeNascimento', label: 'Data de nascimento'}),
      new PerguntaTextbox({chave: 'tipoDeParto', label: 'Tipo de parto'}),
      new PerguntaTextbox({chave: 'idadeGestacionalParto', label: 'Idade gestacional no parto'}),
      new PerguntaTextbox({chave: 'condicaoNascimento', label: 'Condição de nascimento'}),
      new PerguntaTextbox({chave: 'maFormacao', label: 'Má formação'}),
      new PerguntaNumero({chave: 'peso', step: 0.01, label: 'Peso (g)'}),
      new PerguntaNumero({chave: 'estatura', step: 0.01, label: 'Altura (cm)'}),
      new PerguntaTextbox({chave: 'pc', label: 'PC'}),
      new PerguntaNumero({chave: 'apgar1M', max: 10, label: 'Apgar após 1 minuto'}),
      new PerguntaNumero({chave: 'apgar5M', max: 10, label: 'Apgar após 5 minutos'})
    ]})
  ];

  constructor(private formgen: FormgenService) {}

  private cards: any[];
  private linkCards: any[];
  private cardVisivelIndex = 0;
  
  ngOnInit() {
    this.form = this.formgen.toFormGroup(this.perguntas);
    window.addEventListener('scroll', this.scroll, true);
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.scroll, true);
  }

  scroll = (): void => {
    if (!this.cards && document.getElementById('card_mae')) {
      this.cards = [
        document.getElementById('card_mae'),
        document.getElementById('card_enxatema'),
        document.getElementById('card_crianca'),
        document.getElementById('botoes')
      ];

      this.linkCards = [
        document.getElementById('link_card_mae'),
        document.getElementById('link_card_enxatema'),
        document.getElementById('link_card_crianca'),
        document.getElementById('link_botoes')
      ];
    }

    let oldCardVisivelIndex = this.cardVisivelIndex;

    for (let i = 0; i < this.cards.length; i++) {
      if (this.checkVisible(this.cards[i])) {
        this.cardVisivelIndex = i;
        break;
      }
    }

    if (this.cardVisivelIndex !== oldCardVisivelIndex) {
      this.linkCards[oldCardVisivelIndex].classList.remove('active');
      this.linkCards[this.cardVisivelIndex].classList.add('active');
    }
  }

  checkVisible(elm) {
    var rect = elm.getBoundingClientRect();
    var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
  }  

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }
}