import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-square',
  template: `
    <p>
      {{random}}
    </p>
  `,
  standalone: true,
  imports: [CommonModule],
  //templateUrl: './square.component.html',
  //styleUrl: './square.component.scss'
})
export class SquareComponent {
  random = Math.random();
}
