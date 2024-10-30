import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'Flower-new',
  templateUrl: './Flower-new.component.html',
  styleUrls: ['./Flower-new.component.scss']
})
export class FlowerNewComponent {
  @ViewChild("FlowerForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}