import { Route } from '@angular/router';

import { MainComponent } from './components/main/main.component';
import { AboutComponent } from './components/about/about.component';

export const routerConfig: Route[] = [

    {
        path: 'home',
        component: MainComponent
    },


    {
        path: 'about',
        component: AboutComponent
    },


    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },


    {
        path: '**',
        redirectTo: 'home'
    }

]