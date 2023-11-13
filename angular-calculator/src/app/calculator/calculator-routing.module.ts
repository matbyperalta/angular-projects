import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {CalculatorTemplateComponent} from "./calculatortemplate/calculator-template.component";

const routes: Routes = [
  {
    path: 'board',
    component: CalculatorTemplateComponent,
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export  class CalculatorRoutingModule {}
