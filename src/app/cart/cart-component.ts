import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
    selector: 'app-cart',
    templateUrl: './cart-component.html',
    styleUrls: ['./cart-component.css']
})
export class CartComponent {

    items;
    checkoutForm;

    constructor(
        private cartService: CartService,
        private formBuilder: FormBuilder,
    ) { 
        this.items = this.cartService.getItems();

        this,this.checkoutForm = this.formBuilder.group({
            name:'',
            adress: ''
        });
    }
    
    onSubmit(customerData){
        console.warn('your order has been submitted', customerData);

        this.items = this.cartService.clearCart();
        this.checkoutForm.reset();
    }

    clearCart() {
        this.items = [];
        window.alert('The product has been removed from cart!');
    }

}