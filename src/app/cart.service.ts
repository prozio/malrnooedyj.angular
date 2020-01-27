import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CartService {
    items=[];

    addToCart(serie) {
        this.items.push(serie);
    }

    getItems(){
        return this.items;
    }

    clearCart() {
        this.items = [];
        return this.items;
    }
}