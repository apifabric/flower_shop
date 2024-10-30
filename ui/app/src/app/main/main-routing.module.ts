import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main.component';

export const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
        { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
        { path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) },
      
    
        { path: 'Customer', loadChildren: () => import('./Customer/Customer.module').then(m => m.CustomerModule) },
    
        { path: 'Employee', loadChildren: () => import('./Employee/Employee.module').then(m => m.EmployeeModule) },
    
        { path: 'Feedback', loadChildren: () => import('./Feedback/Feedback.module').then(m => m.FeedbackModule) },
    
        { path: 'Flower', loadChildren: () => import('./Flower/Flower.module').then(m => m.FlowerModule) },
    
        { path: 'Inventory', loadChildren: () => import('./Inventory/Inventory.module').then(m => m.InventoryModule) },
    
        { path: 'Order', loadChildren: () => import('./Order/Order.module').then(m => m.OrderModule) },
    
        { path: 'OrderDetail', loadChildren: () => import('./OrderDetail/OrderDetail.module').then(m => m.OrderDetailModule) },
    
        { path: 'OrderPromotion', loadChildren: () => import('./OrderPromotion/OrderPromotion.module').then(m => m.OrderPromotionModule) },
    
        { path: 'Promotion', loadChildren: () => import('./Promotion/Promotion.module').then(m => m.PromotionModule) },
    
        { path: 'StockPurchase', loadChildren: () => import('./StockPurchase/StockPurchase.module').then(m => m.StockPurchaseModule) },
    
        { path: 'Supplier', loadChildren: () => import('./Supplier/Supplier.module').then(m => m.SupplierModule) },
    
        { path: 'WorkSchedule', loadChildren: () => import('./WorkSchedule/WorkSchedule.module').then(m => m.WorkScheduleModule) },
    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }