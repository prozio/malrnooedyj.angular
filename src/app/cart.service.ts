import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
@Injectable({
    providedIn: 'root'
})
export class CartService {
    items=[];

    constructor(
        private http: HttpClient
    ) {}

    addToCart(serie) {
        this.items.push(serie);
    }

    getItems(){
        return this.items;
    }

    clearCart() {
        this.items = [];
        window.alert('The product has been removed from cart!');
        return this.items;
    }

    getShippingPrice() {
        return this.http.get('/assets/shipping.json');
    }
}