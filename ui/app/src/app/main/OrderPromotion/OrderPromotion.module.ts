import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {ORDERPROMOTION_MODULE_DECLARATIONS, OrderPromotionRoutingModule} from  './OrderPromotion-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    OrderPromotionRoutingModule
  ],
  declarations: ORDERPROMOTION_MODULE_DECLARATIONS,
  exports: ORDERPROMOTION_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class OrderPromotionModule { }