import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';

import { CompanyService } from './shared/model/company.service';
import { CompanyServiceFB } from './shared/model/company-fb.service';
import { AuthService } from './shared//security/auth.service';

import { HeaderComponent } from './components/common/header/header.component';
import { FooterComponent } from './components/common/footer/footer.component';

import { MainComponent } from './components/main/main.component';
import { TopComponent } from './components/main/top/top.component';
import { HappeningComponent } from './components/main/happening/happening.component';
import { ContactComponent } from './components/main/contact/contact.component';

import { AboutComponent } from './components/about/about.component';
import { SigninComponent } from './components/common/signin/signin.component';
import { JoinComponent } from './components/common/join/join.component';
import { MemberComponent } from './components/member/member.component';

import { firebaseConfig, authConfig } from "../environments/firebase.config";
import { routerConfig } from './router.config';

import 'rxjs/add/operator/do';


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        MainComponent,
        FooterComponent,
        TopComponent,
        HappeningComponent,
        AboutComponent,
        ContactComponent,
        SigninComponent,
        JoinComponent,
        MemberComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        AngularFireModule.initializeApp(firebaseConfig, authConfig),
        RouterModule.forRoot(routerConfig)
    ],
    providers: [CompanyService, CompanyServiceFB, AuthService],
    bootstrap: [AppComponent]
})
export class AppModule { }
