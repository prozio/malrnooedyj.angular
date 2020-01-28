var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { CartService } from '../cart.service';
var CartComponent = /** @class */ (function () {
    function CartComponent(cartService) {
        this.cartService = cartService;
    }
    CartComponent.prototype.ngOnInit = function () {
        this.items = this.cartService.getItems();
    };
    CartComponent.prototype.clearCart = function () {
        this.items = [];
        window.alert('The product has been removed from cart!');
    };
    CartComponent = __decorate([
        Component({
            selector: 'app-cart',
            templateUrl: './cart-component.html',
            styleUrls: ['./cart-component.css']
        }),
        __metadata("design:paramtypes", [CartService])
    ], CartComponent);
    return CartComponent;
}());
export { CartComponent };
//# sourceMappingURL=cart-component.js.map