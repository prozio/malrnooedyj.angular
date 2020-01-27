var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
import { series } from '../series';
var SerieListComponent = /** @class */ (function () {
    function SerieListComponent() {
        this.series = series;
    }
    SerieListComponent.prototype.share = function () {
        window.alert('The serie has been shared!');
    };
    SerieListComponent.prototype.onNotify = function () {
        window.alert('You will be notified when the serie goes on sale');
    };
    SerieListComponent = __decorate([
        Component({
            selector: 'app-serie-list',
            templateUrl: './serie-list.component.html',
            styleUrls: ['./serie-list.component.css']
        })
    ], SerieListComponent);
    return SerieListComponent;
}());
export { SerieListComponent };
//# sourceMappingURL=serie-list.component.js.map