import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {STOCKPURCHASE_MODULE_DECLARATIONS, StockPurchaseRoutingModule} from  './StockPurchase-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    StockPurchaseRoutingModule
  ],
  declarations: STOCKPURCHASE_MODULE_DECLARATIONS,
  exports: STOCKPURCHASE_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class StockPurchaseModule { }