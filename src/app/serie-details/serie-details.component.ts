import { OnInit, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { series } from '../series';
import { CartService } from '../cart.service';
import { find } from 'lodash';


@Component({
  selector: 'app-serie-details',
  templateUrl: './serie-details.component.html',
  styleUrls: ['./serie-details.component.css']
})
export class SerieDetailsComponent implements OnInit {
    serie;

    constructor(
        private route: ActivatedRoute,
        private cartService: CartService
    ) {}

    ngOnInit() {
        this.route.paramMap.subscribe(params => {
          this.serie = find(series, );
          this.serie = series[+params.get('serieId')];
        });
      }

    addToCart(serie) {
      window.alert('Your product has been added to the cart!');
      this.cartService.addToCart(serie);
    }
} 

