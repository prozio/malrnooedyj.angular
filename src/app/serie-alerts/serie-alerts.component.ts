import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-serie-alerts',
  templateUrl: './serie-alerts.component.html'
})
export class SerieAlertsComponent {
  @Input() serie: any;
  @Output() notify = new EventEmitter();
}