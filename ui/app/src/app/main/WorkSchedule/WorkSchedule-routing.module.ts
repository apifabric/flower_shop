import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkScheduleHomeComponent } from './home/WorkSchedule-home.component';
import { WorkScheduleNewComponent } from './new/WorkSchedule-new.component';
import { WorkScheduleDetailComponent } from './detail/WorkSchedule-detail.component';

const routes: Routes = [
  {path: '', component: WorkScheduleHomeComponent},
  { path: 'new', component: WorkScheduleNewComponent },
  { path: ':id', component: WorkScheduleDetailComponent,
    data: {
      oPermission: {
        permissionId: 'WorkSchedule-detail-permissions'
      }
    }
  }
];

export const WORKSCHEDULE_MODULE_DECLARATIONS = [
    WorkScheduleHomeComponent,
    WorkScheduleNewComponent,
    WorkScheduleDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkScheduleRoutingModule { }