import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './WorkSchedule-card.component.html',
  styleUrls: ['./WorkSchedule-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.WorkSchedule-card]': 'true'
  }
})

export class WorkScheduleCardComponent {


}