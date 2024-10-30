import { MenuRootItem } from 'ontimize-web-ngx';

import { CustomerCardComponent } from './Customer-card/Customer-card.component';

import { EmployeeCardComponent } from './Employee-card/Employee-card.component';

import { FeedbackCardComponent } from './Feedback-card/Feedback-card.component';

import { FlowerCardComponent } from './Flower-card/Flower-card.component';

import { InventoryCardComponent } from './Inventory-card/Inventory-card.component';

import { OrderCardComponent } from './Order-card/Order-card.component';

import { OrderDetailCardComponent } from './OrderDetail-card/OrderDetail-card.component';

import { OrderPromotionCardComponent } from './OrderPromotion-card/OrderPromotion-card.component';

import { PromotionCardComponent } from './Promotion-card/Promotion-card.component';

import { StockPurchaseCardComponent } from './StockPurchase-card/StockPurchase-card.component';

import { SupplierCardComponent } from './Supplier-card/Supplier-card.component';

import { WorkScheduleCardComponent } from './WorkSchedule-card/WorkSchedule-card.component';


export const MENU_CONFIG: MenuRootItem[] = [
    { id: 'home', name: 'HOME', icon: 'home', route: '/main/home' },
    
    {
    id: 'data', name: ' data', icon: 'remove_red_eye', opened: true,
    items: [
    
        { id: 'Customer', name: 'CUSTOMER', icon: 'view_list', route: '/main/Customer' }
    
        ,{ id: 'Employee', name: 'EMPLOYEE', icon: 'view_list', route: '/main/Employee' }
    
        ,{ id: 'Feedback', name: 'FEEDBACK', icon: 'view_list', route: '/main/Feedback' }
    
        ,{ id: 'Flower', name: 'FLOWER', icon: 'view_list', route: '/main/Flower' }
    
        ,{ id: 'Inventory', name: 'INVENTORY', icon: 'view_list', route: '/main/Inventory' }
    
        ,{ id: 'Order', name: 'ORDER', icon: 'view_list', route: '/main/Order' }
    
        ,{ id: 'OrderDetail', name: 'ORDERDETAIL', icon: 'view_list', route: '/main/OrderDetail' }
    
        ,{ id: 'OrderPromotion', name: 'ORDERPROMOTION', icon: 'view_list', route: '/main/OrderPromotion' }
    
        ,{ id: 'Promotion', name: 'PROMOTION', icon: 'view_list', route: '/main/Promotion' }
    
        ,{ id: 'StockPurchase', name: 'STOCKPURCHASE', icon: 'view_list', route: '/main/StockPurchase' }
    
        ,{ id: 'Supplier', name: 'SUPPLIER', icon: 'view_list', route: '/main/Supplier' }
    
        ,{ id: 'WorkSchedule', name: 'WORKSCHEDULE', icon: 'view_list', route: '/main/WorkSchedule' }
    
    ] 
},
    
    { id: 'settings', name: 'Settings', icon: 'settings', route: '/main/settings'}
    ,{ id: 'about', name: 'About', icon: 'info', route: '/main/about'}
    ,{ id: 'logout', name: 'LOGOUT', route: '/login', icon: 'power_settings_new', confirm: 'yes' }
];

export const MENU_COMPONENTS = [

    CustomerCardComponent

    ,EmployeeCardComponent

    ,FeedbackCardComponent

    ,FlowerCardComponent

    ,InventoryCardComponent

    ,OrderCardComponent

    ,OrderDetailCardComponent

    ,OrderPromotionCardComponent

    ,PromotionCardComponent

    ,StockPurchaseCardComponent

    ,SupplierCardComponent

    ,WorkScheduleCardComponent

];