import {Component} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss'
})
export class CalculatorComponent {
  public firstNumber: number = 1;
  public secondNumber: number = 1;
  public result: number = 0;
  public operator: string = '+';
  public operators: string[] = ['+', '-', '*', '/'];

  public calc() {
    switch (this.operator) {
      case '+':
        this.add();
        break;
      case '-':
        this.subtract();
        break;
      case '*':
        this.multiply();
        break;
      case '/':
        this.divide();
        break;
      default:
        this.add();
        break;
    }
  }

  public add() {
    this.result = this.firstNumber + this.secondNumber;
  }

  public subtract() {
    this.result = this.firstNumber - this.secondNumber;
  }

  public multiply() {
    this.result = this.firstNumber * this.secondNumber;
  }

  public divide() {
    this.result = this.firstNumber / this.secondNumber;
  }
}
