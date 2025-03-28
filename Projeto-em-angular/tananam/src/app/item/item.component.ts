import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  @Input() productName!: string;
  @Input() productPrice!: number;
  @Input() productImage!: string;
  @Input() promotion: number | undefined;
  @Input() inCart: boolean = false;
  @Input() isCart: boolean = false;
  @Output() cartToggle = new EventEmitter<void>();

  toggleCart() {
    this.inCart = !this.inCart;
    this.cartToggle.emit();
  }

  buy() {
    alert('Item comprado com sucesso')
  }


}
