import { Component, OnInit } from '@angular/core';

declare var d3: any;
declare var dimple: any;

@Component({
  selector: 'ipesq-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  data = [
    { "Word":"Hello", "Awesomeness":2000 },
    { "Word":"World", "Awesomeness":3000 }
  ];

  constructor() {}

  ngOnInit() {
    this.criaChartOperacoes();
    this.criaChartCidades();
    this.criaChartMalformacoes();
  }

  criaChartOperacoes() {
    let svg = dimple.newSvg("#chart_operacoes", 500, 400);
    
    d3.json('http://45.79.104.38/estatisticas', function(data) {
      let dados = [];

      for (let chave in data) {
        dados.push({
          'Data': chave,
          'Operacoes': data[chave] 
        });
      }

      let chart = new dimple.chart(svg, dados);
      chart.addCategoryAxis("x", "Data");
      chart.addMeasureAxis("y", "Operacoes");
      chart.addSeries(null, dimple.plot.line);
      chart.draw();  
    });
  }

  criaChartCidades() {
    let svg = dimple.newSvg("#chart_cidades", 500, 400);

    d3.json('http://45.79.104.38/estatisticas/cidades', function(dados) {

      let chart = new dimple.chart(svg, dados);
      chart.addMeasureAxis("p", "Prontuarios");
      chart.addSeries("Cidade", dimple.plot.pie);
      chart.addLegend(410, 20, 90, 300, "left");
      chart.draw();  
    });
  }

  criaChartMalformacoes() {
    let svg = dimple.newSvg("#chart_malformacoes", 500, 400);

    d3.json('http://45.79.104.38/estatisticas/malformacoes', function(dados) {

      let chart = new dimple.chart(svg, dados);
      chart.addCategoryAxis("x", "Malformacao");
      chart.addMeasureAxis("y", "Quantidade");
      chart.addSeries("Malformacao", dimple.plot.bar);
      chart.addLegend(410, 20, 90, 300, "left");
      chart.draw();  
    });
  }
}
