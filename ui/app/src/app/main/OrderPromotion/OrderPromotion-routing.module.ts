import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderPromotionHomeComponent } from './home/OrderPromotion-home.component';
import { OrderPromotionNewComponent } from './new/OrderPromotion-new.component';
import { OrderPromotionDetailComponent } from './detail/OrderPromotion-detail.component';

const routes: Routes = [
  {path: '', component: OrderPromotionHomeComponent},
  { path: 'new', component: OrderPromotionNewComponent },
  { path: ':id', component: OrderPromotionDetailComponent,
    data: {
      oPermission: {
        permissionId: 'OrderPromotion-detail-permissions'
      }
    }
  }
];

export const ORDERPROMOTION_MODULE_DECLARATIONS = [
    OrderPromotionHomeComponent,
    OrderPromotionNewComponent,
    OrderPromotionDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderPromotionRoutingModule { }