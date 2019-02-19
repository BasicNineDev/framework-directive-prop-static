import {Directive, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[myDirective]'
})
export class MyDirectiveDirective {


  @Input() inputValue: string;

  @Input() staticValue: string;

  @HostListener('click') handleClick() {
    console.log('inputValue: ' + this.inputValue);
    console.log('staticValue: ' + this.staticValue);
  }
  constructor() { }

}
