import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./footer/footer.component";
import { NavComponent } from "./nav/nav.component";
import { ItemComponent } from "./item/item.component";
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FooterComponent, NavComponent, ItemComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '';

  items = [
    { name: 'Tênis Esportivo', promotion: true, isCart: true, price: 299.99, image: 'assets/1.png' },
    { name: 'Tênis Casual', promotion: false, isCart: false, price: 199.99, image: 'assets/2.png' },
    { name: 'Camiseta Esportiva', promotion: true, isCart: false, price: 99.99, image: 'assets/3.png' },
    { name: 'Calça Jeans', promotion: false, isCart: true, price: 149.99, image: 'assets/4.png' },
    { name: 'Jaqueta de Couro', promotion: true, isCart: false, price: 399.99, image: 'assets/5.png' },
    { name: 'Relógio Digital', promotion: false, isCart: true, price: 249.99, image: 'assets/6.png' },
    { name: 'Tênis Esportivo', promotion: true, isCart: true, price: 299.99, image: 'assets/1.png' },
    { name: 'Tênis Casual', promotion: false, isCart: false, price: 199.99, image: 'assets/2.png' },
    { name: 'Camiseta Esportiva', promotion: true, isCart: false, price: 99.99, image: 'assets/3.png' },
    { name: 'Calça Jeans', promotion: false, isCart: true, price: 149.99, image: 'assets/4.png' },
    { name: 'Jaqueta de Couro', promotion: true, isCart: false, price: 399.99, image: 'assets/5.png' },
    { name: 'Relógio Digital', promotion: false, isCart: true, price: 249.99, image: 'assets/6.png' }

  ];

  cartItems: { name: string; price: number; image: string }[] = [];
  cartTotal: number = 0;

  addToCart(item: { name: string; price: number; image: string }) {
    this.cartItems.push(item);
    this.cartTotal = this.cartItems.reduce((total, currentItem) => total + currentItem.price, 0);
  }
}
