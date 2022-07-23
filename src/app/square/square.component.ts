import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-square',
  template: ` <button>{{ value }}</button> `,
  styles: [
    'button { width: 100%; height: 100%; font-size: 5em !important; border: none;background: rgb(198, 111, 111); color: rgb(243, 227, 206);}',
  ],
})
export class SquareComponent {
  @Input() value: 'X' | 'O' | undefined;
}
