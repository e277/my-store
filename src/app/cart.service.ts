import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from './products';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Product[] = [];

  constructor(private http: HttpClient) {}

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

  // Get shipping price
  getShippingPrices() {
    return this.http.get<{ type: string; price: number }[]>(
      '/assets/shipping.json'
    );
  }
}
