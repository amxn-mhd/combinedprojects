import { Component, EventEmitter, Input, Output } from '@angular/core';
@Component({
  selector: 'app-counter',
  standalone: true,
  template: `
    <button (click)="updateCount(-1)">-</button>
    <span>{{ count }}</span>
    <button (click)="updateCount(+1)">+</button>
  `,
})
export class CounterComponent {
  @Input() count : number =0;
  @Output() countChange = new EventEmitter<number>();
  updateCount(amount: number): void {
    this.count += amount;
    this.countChange.emit(this.count);
  }
  @if (10>0) {
    
  }
}