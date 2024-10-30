import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'OrderPromotion-new',
  templateUrl: './OrderPromotion-new.component.html',
  styleUrls: ['./OrderPromotion-new.component.scss']
})
export class OrderPromotionNewComponent {
  @ViewChild("OrderPromotionForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}