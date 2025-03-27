import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item',
  standalone: true,
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  @Input() productName!: string;
  @Input() productPrice!: number;
  @Input() productImage!: string;
  @Input() promotion!: boolean;
  @Input() isCart!: boolean;
}
