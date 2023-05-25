import { Component, OnInit,ViewChild  } from '@angular/core';
import { NumberComponent } from '../number/number.component';

@Component({
  selector: 'app-number-parent',
  templateUrl: './number-parent.component.html',
  styleUrls: ['./number-parent.component.css']
})
export class NumberParentComponent implements OnInit {
  
 
  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild(NumberComponent)
  private numberComponent = {} as NumberComponent;
  increase() {
    console.log("inside increase");
    
         this.numberComponent.increaseByOne();
  }
  decrease() {
         this.numberComponent.decreaseByOne();
  }

}
