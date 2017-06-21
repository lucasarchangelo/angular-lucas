import { Injectable } from '@angular/core';

@Injectable()
export class AppService {

  constructor() { }
  getClientes(){
    return [{
      "nomeCompleto": "Barbara",
      "telefoneFixo": "22332233",
      "telefoneContato": "11930303030",
      "email": "barbara@teste.com.br",
      "quantidade": "5",
      "opAtual": "Vivo",
      "razaoSocial": "Barbara LTDA",
      "cnpj": "010101010101010101",
      "tipoContato": "WhatsApp",
    },
      {
      "nomeCompleto": "Teste 2",
      "telefoneFixo": "22332233",
      "telefoneContato": "11930303030",
      "email": "teste2@teste.com.br",
      "quantidade": "5",
      "opAtual": "Claro",
      "razaoSocial": "Barbara LTDA",
      "cnpj": "010101010101010101",
      "tipoContato": "WhatsApp",
    }]
  }
}
