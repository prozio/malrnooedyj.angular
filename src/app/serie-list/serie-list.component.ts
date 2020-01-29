import { Component } from '@angular/core';

import { series } from '../series';

@Component({
  selector: 'app-serie-list',
  templateUrl: './serie-list.component.html',
  styleUrls: ['./serie-list.component.css']
})
export class SerieListComponent {
  series = series;

  share() {
    window.alert('The serie has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the serie goes on sale');
  }

}
