import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'StockPurchase-new',
  templateUrl: './StockPurchase-new.component.html',
  styleUrls: ['./StockPurchase-new.component.scss']
})
export class StockPurchaseNewComponent {
  @ViewChild("StockPurchaseForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}