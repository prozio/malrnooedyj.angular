import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SerieListComponent } from './serie-list/serie-list.component';
import { SerieDetailsComponent } from './serie-details/serie-details.component';
import { CartComponent } from './cart/cart-component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: SerieListComponent },
      { path: 'series/:serieId', component: SerieDetailsComponent },
      { path: 'cart', component: CartComponent}
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    SerieListComponent,
    SerieDetailsComponent,
    CartComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

