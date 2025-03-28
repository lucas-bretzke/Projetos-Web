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
    { name: 'Tênis Esportivo', promotion: 7, inCart: false, price: 299.99, image: 'assets/1.png' },
    { name: 'Tênis Casual', promotion: 0, inCart: false, price: 199.99, image: 'assets/2.png' },
    { name: 'Camiseta Esportiva', promotion: 5, inCart: false, price: 99.99, image: 'assets/3.png' },
    { name: 'Calça Jeans', promotion: 0, inCart: false, price: 149.99, image: 'assets/4.png' },
    { name: 'Jaqueta de Couro', promotion: 5, inCart: false, price: 399.99, image: 'assets/5.png' },
    { name: 'Relógio Digital', promotion: 0, inCart: false, price: 249.99, image: 'assets/6.png' },
    { name: 'Tênis Esportivo', promotion: 10, inCart: false, price: 299.99, image: 'assets/1.png' },
    { name: 'Tênis Casual', promotion: 0, inCart: false, price: 199.99, image: 'assets/2.png' },
    { name: 'Camiseta Esportiva', promotion: 5, inCart: false, price: 99.99, image: 'assets/3.png' },
    { name: 'Calça Jeans', promotion: 5, inCart: true, price: 149.99, image: 'assets/4.png' },
    { name: 'Jaqueta de Couro', promotion: 0, inCart: false, price: 399.99, image: 'assets/5.png' },
    { name: 'Relógio Digital', promotion: 15, inCart: true, price: 249.99, image: 'assets/6.png' }

  ];

  cartItems: {
promotion: number; name: string; price: number; image: string 
}[] = [];
  cartTotal: number = 0;

  addToCart(item: any) {
    if (item.inCart) {
      this.cartItems = this.cartItems.filter(cartItem => cartItem !== item);
    } else {
      this.cartItems.push(item);
    }
    item.inCart = !item.inCart;
    this.cartTotal = this.cartItems.reduce((total, currentItem) => total + currentItem.price, 0);
  }
}
