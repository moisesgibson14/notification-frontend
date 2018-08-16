import { RouterModule , Routes} from '@angular/router'

import { HeaderComponent } from './shared/header/header.component'
import { AppComponent } from './app.component';

const appRoutes : Routes = [
    {path : '/' , component:AppComponent}
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, { useHash:true})