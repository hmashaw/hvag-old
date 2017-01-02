import { Route } from '@angular/router';

import { AuthGuard } from './shared/security/auth.guard';
import { MainComponent } from './components/main/main.component';
import { AboutComponent } from './components/about/about.component';
import { BlogComponent } from './components/blog/blog.component';
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
        path: 'blog',
        component: BlogComponent
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
        component: MemberComponent,
        canActivate: [AuthGuard]
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
