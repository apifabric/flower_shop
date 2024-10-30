import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './OrderPromotion-card.component.html',
  styleUrls: ['./OrderPromotion-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.OrderPromotion-card]': 'true'
  }
})

export class OrderPromotionCardComponent {


}