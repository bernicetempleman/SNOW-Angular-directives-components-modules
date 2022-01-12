import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appText]'
})
export class TextDirective {

  constructor(private eleRef: ElementRef) {
    eleRef.nativeElement.style.background = 'pink';

}
}
