import { Injectable } from '@angular/core';

@Injectable()
export class AppService {

  constructor() { }
  getClientes(){
    return [{
      "nomeCompleto": "Barbara",
      "idade": "21",
      "email": "barbara@teste.com.br",
      "tipoContato": "WhatsApp",
      "telefoneContato": "11930303030"
    },
      {
      "nomeCompleto": "Teste",
      "idade": "22",
      "email": "barbara@teste.com.br",
      "tipoContato": "WhatsApp",
      "telefoneContato": "11930303030"
      }]
  }
}
