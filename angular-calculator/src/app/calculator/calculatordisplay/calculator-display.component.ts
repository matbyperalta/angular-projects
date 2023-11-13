import {Component} from "@angular/core";
import {CalculatorService} from "../calculatorservice/calculator.service";

@Component({
  selector: 'calculator-display',
  templateUrl: './calculator-display.component.html'
})
export class CalculatorDisplayComponent {

  outDisplay: string;

  constructor(private calculatorService: CalculatorService) {
    this.outDisplay = '0';
  }

  public ngOnInit() {
    this.calculatorService.outDisplay$
      .subscribe(sharedData => this.outDisplay = sharedData);
  }

}
