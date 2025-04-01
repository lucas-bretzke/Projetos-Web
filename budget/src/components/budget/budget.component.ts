import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-budget',
  standalone: true,
  imports: [CommonModule, FormsModule, CardComponent],
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})
export class BudgetComponent {
  @Input() clientName: string = '';
  @Input() service: string = '';
  @Input() totalValue: number = 0;

  budgets = [
    { clientName: 'Lucas Bretzke', service: 'Desenvolver Site', totalValue: 1100.99 },
    { clientName: 'Valentina Ziels', service: 'Desenvolver App', totalValue: 3200.99 },
    { clientName: 'Kauana Souza', service: 'Gestão de tráfego', totalValue: 92.99 }
  ];

  newBudget = {
    clientName: '',
    service: '',
    totalValue: 0
  };

  addBudget() {
    this.budgets.push({
      clientName: this.newBudget.clientName,
      service: this.newBudget.service,
      totalValue: this.newBudget.totalValue || 0
    });

    this.newBudget = { clientName: '', service: '', totalValue: 0 };
  }
}
