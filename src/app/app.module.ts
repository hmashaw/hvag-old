import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';

import { CompanyService } from './shared/model/company.service';
import { CompanyServiceFB } from './shared/model/company-fb.service';

import { HeaderComponent } from './components/common/header/header.component';
import { FooterComponent } from './components/common/footer/footer.component';

import { MainComponent } from './components/main/main.component';
import { TopComponent } from './components/main/top/top.component';
import { HappeningComponent } from './components/main/happening/happening.component';
import { ContactComponent } from './components/main/contact/contact.component';

import { AboutComponent } from './components/about/about.component';

import { firebaseConfig } from "../environments/firebase.config";
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
        ContactComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AngularFireModule.initializeApp(firebaseConfig),
        RouterModule.forRoot(routerConfig)
    ],
    providers: [CompanyService, CompanyServiceFB],
    bootstrap: [AppComponent]
})
export class AppModule { }
