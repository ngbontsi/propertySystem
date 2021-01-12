import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
import { fakeBackendProvider } from './_helpers';

import { AppRoutingModule } from './app-routing.module';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { AppComponent } from './app.component';
import { AlertComponent } from './_components';
import { HomeComponent } from './home';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ChartsModule} from 'ng2-charts';
// tslint:disable-next-line:import-spacing
import { NavComponent } from './nav/nav.component'
;
// tslint:disable-next-line:import-spacing
import { LayoutModule } from '@angular/cdk/layout'
;
// tslint:disable-next-line:import-spacing
import { MatToolbarModule } from '@angular/material/toolbar'
;
// tslint:disable-next-line:import-spacing
import { MatButtonModule } from '@angular/material/button'
;
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
// tslint:disable-next-line:import-spacing
import { DashComponent } from './dash/dash.component'
;
// tslint:disable-next-line:import-spacing
import { MatGridListModule } from '@angular/material/grid-list'
;
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        ChartsModule,
        HttpClientModule,
        AppRoutingModule,
        BrowserAnimationsModule
,
        LayoutModule
,
        MatToolbarModule ,
        MatButtonModule ,
        MatSidenavModule ,
        MatIconModule ,
        MatGridListModule],
        MatMenuModule,
        MatCardModule,
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent
,
        NavComponent
,
        DashComponent
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
