import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {FLOWER_MODULE_DECLARATIONS, FlowerRoutingModule} from  './Flower-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    FlowerRoutingModule
  ],
  declarations: FLOWER_MODULE_DECLARATIONS,
  exports: FLOWER_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FlowerModule { }