import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  public mensagem;

  public nome: string; // armazenar textos.
  public idade: number; // armazenar números (inteiros E decimais)
  public excluido: boolean; //armazena TRUE ou FALSE

  public situacao: any; // armazena qualquer tipo de variável
  public anoNascimento: number;

  constructor() {
    // alert("mensagem: " + this.mensagem) -- EM FORMA DE ALERTA (JANELA POP-UP)
    // console.log("Mensagem: " + this.mensagem); -- NÃO VISÍVEL AO USUÁRIO

    this.mensagem = "Olá a todos!";

    console.log("Mensagem: " + this.mensagem);

    // this.mensagem = 2020;
  }

  public saudacao() {
    this.mensagem = "Olá, " + this.nome + "! Você informou a idade '" + this.idade + " anos'."
    if (this.idade >= 18) {
      this.situacao = "Você é maior de idade!";
    }
    else {
      this.situacao = "Você é menor de idade!";
    }
  }

  public anoDeNascimento() {
    const anoAtual = 2020; // CONST: a variável não muda durante a execução do método
    let anoNascimento = anoAtual - this.idade; // LET cria variáveis que podem ser alteradas durante a execução do método
    this.anoNascimento = anoNascimento;
  }
}
