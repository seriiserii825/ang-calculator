import {Component} from '@angular/core';
import {ECalcOperator} from '../../../enum/ECalcOperator';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss'
})
export class CalculatorComponent {
  public firstNumber: number = 1;
  public secondNumber: number = 1;
  public result: number = 0;
  public operator: ECalcOperator = ECalcOperator.plus;
  public operators: string[] = ['+', '-', '*', '/'];

  public calc() {
    switch (this.operator) {
      case ECalcOperator.plus:
        this.add();
        break;
      case ECalcOperator.minus:
        this.subtract();
        break;
      case ECalcOperator.multiply:
        this.multiply();
        break;
      case ECalcOperator.divide:
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
