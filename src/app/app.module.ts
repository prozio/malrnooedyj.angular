import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SerieListComponent } from './serie-list/serie-list.component';
import { SerieDetailsComponent } from './serie-details/serie-details.component';
import { CartComponent } from './cart/cart-component';
import { ShippingComponent } from './shipping/shipping.component';
import { SerieAlertsComponent } from './serie-alerts/serie-alerts.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: SerieListComponent },
      { path: 'series/:serieId', component: SerieDetailsComponent },
      { path: 'cart', component: CartComponent },
      { path: 'cart/shipping', component: ShippingComponent },
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    SerieAlertsComponent,
    SerieListComponent,
    SerieDetailsComponent,
    CartComponent,
    ShippingComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

