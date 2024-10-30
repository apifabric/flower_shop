import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {WORKSCHEDULE_MODULE_DECLARATIONS, WorkScheduleRoutingModule} from  './WorkSchedule-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    WorkScheduleRoutingModule
  ],
  declarations: WORKSCHEDULE_MODULE_DECLARATIONS,
  exports: WORKSCHEDULE_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class WorkScheduleModule { }