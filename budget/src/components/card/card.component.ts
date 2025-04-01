import { Component, Input, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() budget!: { clientName: string, service: string, totalValue: number };
  @Output() deleteBudget = new EventEmitter<void>();


  deleteBudget() {
    console.log('Deletando orçamento...');
    // this.budget = !this.budget;
    this.deleteBudget.emit();
  }
}
