var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter } from '@angular/core';
var SerieAlertsComponent = /** @class */ (function () {
    function SerieAlertsComponent() {
        this.notify = new EventEmitter();
    }
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], SerieAlertsComponent.prototype, "serie", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], SerieAlertsComponent.prototype, "notify", void 0);
    SerieAlertsComponent = __decorate([
        Component({
            selector: 'app-serie-alerts',
            templateUrl: './serie-alerts.component.html'
        })
    ], SerieAlertsComponent);
    return SerieAlertsComponent;
}());
export { SerieAlertsComponent };
//# sourceMappingURL=serie-alerts.component.js.map