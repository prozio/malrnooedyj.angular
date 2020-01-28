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
import { ActivatedRoute } from '@angular/router';
import { series } from '../series';
import { CartService } from '../cart.service';
import { find } from 'lodash';
var SerieDetailsComponent = /** @class */ (function () {
    function SerieDetailsComponent(route, cartService) {
        this.route = route;
        this.cartService = cartService;
    }
    SerieDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            _this.serie = find(series);
            _this.serie = series[+params.get('serieId')];
        });
    };
    SerieDetailsComponent.prototype.addToCart = function (serie) {
        window.alert('Your product has been added to the cart!');
        this.cartService.addToCart(serie);
    };
    SerieDetailsComponent = __decorate([
        Component({
            selector: 'app-serie-details',
            templateUrl: './serie-details.component.html',
            styleUrls: ['./serie-details.component.css']
        }),
        __metadata("design:paramtypes", [ActivatedRoute,
            CartService])
    ], SerieDetailsComponent);
    return SerieDetailsComponent;
}());
export { SerieDetailsComponent };
//# sourceMappingURL=serie-details.component.js.map