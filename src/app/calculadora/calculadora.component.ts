import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
  primerValor:number = 0;
  resultado:number = 0;

  operando:string = '';
  ultimoOperando:string = this.operando;

  input:string = '0';
  result:string = '0';

  add(val:number|string) {
    if (
      this.input === '0'
    ) {
      this.input = val.toString();
    } else {
      if (val === '.' && this.input.includes('.')) val = '';
      this.input = `${this.input}${val}`;
    }
  }

  operacion(operando:string) {
    if (this.result =="Infinity" || this.result =="-Infinity") this.resultado = 0;
    this.primerValor = (this.primerValor!= 0)? this.resultado: parseFloat(this.input);
    this.operando = operando;
    this.ultimoOperando = this.operando;
    this.input = '0';
  }

  calc() {
    let a = this.primerValor;
    let b = (this.input.length == 0)? 0: parseFloat(this.input);


    switch(this.operando){
      case '+':this.resultado = a + b ;break;
      case '-':this.resultado = a - b ;break;
      case '*':this.resultado = a * b ;break;
      case '/':this.resultado = a / b ;break;
      default: console.log("Esto no debería ocurrir");
    }

    this.primerValor = this.resultado;
    this.ultimoOperando = ' ';
    this.result = this.resultado.toString();
  }

  limpiar(){
    this.primerValor = 0;
    this.input= '0'
    this.result = '0';
  }

  borrar(){
    this.input = this.input.slice(0, -1);
    if(this.input.length==0) this.input='0';
  }

}
