import {CalculatorRoutingModule} from "./calculator-routing.module";
import {NgModule} from "@angular/core";
import {CalculatorTemplateComponent} from "./calculatortemplate/calculator-template.component";
import {CalculatorDisplayComponent} from "./calculatordisplay/calculator-display.component";
import {CalculatorButtonsComponent} from "./calculatorbuttons/calculator-buttons.component";
import {CalculatorService} from "./calculatorservice/calculator.service";

@NgModule({
  declarations: [
    CalculatorTemplateComponent,
    CalculatorDisplayComponent,
    CalculatorButtonsComponent,
  ],
  imports:[
    CalculatorRoutingModule,
  ],
  providers: [CalculatorService]
})
export class CalculatorModule { }
