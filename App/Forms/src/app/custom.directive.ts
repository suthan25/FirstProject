import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {

  constructor(private ele:ElementRef) {
    ele.nativeElement.style.color = 'pink'
   }

}
