import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromotionHomeComponent } from './home/Promotion-home.component';
import { PromotionNewComponent } from './new/Promotion-new.component';
import { PromotionDetailComponent } from './detail/Promotion-detail.component';

const routes: Routes = [
  {path: '', component: PromotionHomeComponent},
  { path: 'new', component: PromotionNewComponent },
  { path: ':id', component: PromotionDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Promotion-detail-permissions'
      }
    }
  },{
    path: ':promotion_id/OrderPromotion', loadChildren: () => import('../OrderPromotion/OrderPromotion.module').then(m => m.OrderPromotionModule),
    data: {
        oPermission: {
            permissionId: 'OrderPromotion-detail-permissions'
        }
    }
}
];

export const PROMOTION_MODULE_DECLARATIONS = [
    PromotionHomeComponent,
    PromotionNewComponent,
    PromotionDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PromotionRoutingModule { }