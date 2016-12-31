import { Route } from '@angular/router';

import { MainComponent } from './components/main/main.component';
import { AboutComponent } from './components/about/about.component';
import { JoinComponent } from './components/common/join/join.component';
import { SigninComponent } from './components/common/signin/signin.component';
import { MemberComponent } from './components/member/member.component';

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
        path: 'join',
        component: JoinComponent
    },


    {
        path: 'signin',
        component: SigninComponent
    },


    {
        path: 'member',
        component: MemberComponent
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