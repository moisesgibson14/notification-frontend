import { RouterModule , Routes} from '@angular/router'
import { ListNotificationComponent } from './component/list-notification/list-notification.component'
import { ViewNotificationComponent} from './component/view-notification/view-notification.component'

const appRoutes : Routes = [
    {path : 'list-notifications', component:ListNotificationComponent},
    {path : 'view-notification/:id', component: ViewNotificationComponent},
    {path : '' , redirectTo:'list-notifications', pathMatch:'full'}
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, { useHash:true})