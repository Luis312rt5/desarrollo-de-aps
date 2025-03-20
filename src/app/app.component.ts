import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'calculadora-angular';
  num1: number = 0;
  num2: number = 0;
  operador: string = 'Suma';
  resultado: number = 0;

  constructor(){
    this.calculo();
  }

  calculo() {
    switch (this.operador) {
      case 'Suma':
        this.resultado = this.num1 + this.num2;
        break;
      case 'Resta':
        this.resultado = this.num1 - this.num2;
        break;
      case 'Multiplicacion':
        this.resultado = this.num1 * this.num2;
        break;
      case 'Division':
        this.resultado = this.num1 / this.num2;
        break;
      default:
        this.resultado = 0;
    }
  }
}
