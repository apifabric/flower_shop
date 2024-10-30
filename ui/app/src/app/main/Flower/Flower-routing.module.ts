import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlowerHomeComponent } from './home/Flower-home.component';
import { FlowerNewComponent } from './new/Flower-new.component';
import { FlowerDetailComponent } from './detail/Flower-detail.component';

const routes: Routes = [
  {path: '', component: FlowerHomeComponent},
  { path: 'new', component: FlowerNewComponent },
  { path: ':id', component: FlowerDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Flower-detail-permissions'
      }
    }
  },{
    path: ':flower_id/Inventory', loadChildren: () => import('../Inventory/Inventory.module').then(m => m.InventoryModule),
    data: {
        oPermission: {
            permissionId: 'Inventory-detail-permissions'
        }
    }
},{
    path: ':flower_id/OrderDetail', loadChildren: () => import('../OrderDetail/OrderDetail.module').then(m => m.OrderDetailModule),
    data: {
        oPermission: {
            permissionId: 'OrderDetail-detail-permissions'
        }
    }
},{
    path: ':flower_id/StockPurchase', loadChildren: () => import('../StockPurchase/StockPurchase.module').then(m => m.StockPurchaseModule),
    data: {
        oPermission: {
            permissionId: 'StockPurchase-detail-permissions'
        }
    }
}
];

export const FLOWER_MODULE_DECLARATIONS = [
    FlowerHomeComponent,
    FlowerNewComponent,
    FlowerDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlowerRoutingModule { }