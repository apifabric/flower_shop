import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Flower-card.component.html',
  styleUrls: ['./Flower-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Flower-card]': 'true'
  }
})

export class FlowerCardComponent {


}