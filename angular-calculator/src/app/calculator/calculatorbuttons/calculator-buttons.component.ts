import {Component, OnInit} from "@angular/core";
import {CalculatorService} from "../calculatorservice/calculator.service";
import {EnumConstants} from "../constants/enum.constants";

@Component({
  selector: 'calculator-buttons',
  templateUrl: './calculator-buttons.component.html'
})
export class CalculatorButtonsComponent implements OnInit{

  outDisplay: string;
  operation: string;
  lastKeyDown: string;
  expresion: string;

  constructor(private calculatorService: CalculatorService) {
    this.outDisplay = "0";
    this.operation = "";
    this.lastKeyDown = "";
    this.expresion = "";
  }

  public ngOnInit() {
    this.calculatorService.outDisplay$
      .subscribe(sharedData => this.outDisplay = sharedData);
  }

  onClick(value: any){
    this.multiplyByLessOne(value);
    this.percentage(value);
    this.buildExpresion(value);
    this.showNumber(value);
    this.cleanDisplay(value);
    this.putDecimal(value);
    this.lastKeyDown = value;
    this.calculate(value);
  }

  private multiplyByLessOne(value: any){
    if(EnumConstants.more_less === value){
      this.outDisplay = eval("-1 * "+this.outDisplay.replace(',','.')).toString().replace(/\./g,",");
      this.sendDataToDisplay();
    }
  }

  private percentage(value: any){
    if(EnumConstants.percent === value){
      this.outDisplay = eval("0.01 * "+this.outDisplay.replace(',','.')).toString().replace(/\./g,",");
      this.sendDataToDisplay();
    }
  }

  private buildExpresion(value: any){
    if(this.isOperator(value)){
      this.expresion = this.expresion + "("+this.outDisplay+")" + value;
    }
  }

  private showNumber(value: any){
    if(!isNaN(value)){
      if(this.isOperator(this.lastKeyDown)){
        this.outDisplay = "0";
      }
      this.concatDisplay(value);
      this.sendDataToDisplay();
    }
  }

  private cleanDisplay(value: any){
    if(value === EnumConstants.ac) {
      this.outDisplay = "0";
      this.expresion = ""
      this.lastKeyDown = "";
      this.sendDataToDisplay();
    }
  }

  private isOperator(value: any){
    if(value === EnumConstants.add || value === EnumConstants.substrate || value === EnumConstants.multiply
      || value === EnumConstants.divide){
      return true;
    }
    return false;
  }

  private sendDataToDisplay(){
    this.calculatorService.setData(this.outDisplay);
  }

  private concatDisplay(value: any) {
    if (this.outDisplay === "0")
      this.outDisplay = "";
    this.outDisplay = this.outDisplay + value;
  }

  private putDecimal(value: any){
    if(value === EnumConstants.decimal){
      if(!this.outDisplay.includes(',')) {
        this.outDisplay = this.outDisplay + ",";
        this.sendDataToDisplay();
      }
    }
  }

  private calculate(value: any){
    if(EnumConstants.calculate === value){
      this.expresion = this.expresion + "("+this.outDisplay+")";
      this.outDisplay = eval(this.expresion.replace(",",".")).toString().replace(/\./g,",");
      this.expresion = "";
      this.sendDataToDisplay();
    }
  }
}
