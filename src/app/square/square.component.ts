import { Component } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrl: './square.component.scss'
})
export class SquareComponent {
  //random = Math.random();
  random = 0;

  constructor() {
    setInterval(() => this.random = Math.random(), 1000)
  }
}
