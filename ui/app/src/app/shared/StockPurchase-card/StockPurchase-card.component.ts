import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './StockPurchase-card.component.html',
  styleUrls: ['./StockPurchase-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.StockPurchase-card]': 'true'
  }
})

export class StockPurchaseCardComponent {


}