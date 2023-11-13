import {Injectable} from "@angular/core";
import {Observable, Subject} from "rxjs";

@Injectable()
export class CalculatorService{

  private outDisplay: Subject<string> = new Subject<string>();
  outDisplay$: Observable<string> = this.outDisplay.asObservable();

  constructor() {
  }

  setData(updatedData: string){
    this.outDisplay.next(updatedData);
  }

}

