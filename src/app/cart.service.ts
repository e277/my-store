import { Injectable } from '@angular/core';

import { Product } from './products';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Product[] = [];

  constructor() {}

  // Add product to cart
  addToCart(product: Product) {
    this.items.push(product);
  }

  // Get cart items
  getItems() {
    return this.items;
  }

  // Clear cart
  clearCart() {
    this.items = [];
    return this.items;
  }
}
