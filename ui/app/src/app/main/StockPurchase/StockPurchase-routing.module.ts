import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StockPurchaseHomeComponent } from './home/StockPurchase-home.component';
import { StockPurchaseNewComponent } from './new/StockPurchase-new.component';
import { StockPurchaseDetailComponent } from './detail/StockPurchase-detail.component';

const routes: Routes = [
  {path: '', component: StockPurchaseHomeComponent},
  { path: 'new', component: StockPurchaseNewComponent },
  { path: ':id', component: StockPurchaseDetailComponent,
    data: {
      oPermission: {
        permissionId: 'StockPurchase-detail-permissions'
      }
    }
  }
];

export const STOCKPURCHASE_MODULE_DECLARATIONS = [
    StockPurchaseHomeComponent,
    StockPurchaseNewComponent,
    StockPurchaseDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockPurchaseRoutingModule { }