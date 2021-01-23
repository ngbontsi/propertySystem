import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { NavComponent } from './nav/nav.component';
// tslint:disable-next-line:import-spacing
import { LayoutModule } from '@angular/cdk/layout';
// tslint:disable-next-line:import-spacing
// tslint:disable-next-line:import-spacing
// tslint:disable-next-line:import-spacing
import { DashComponent } from './dash/dash.component';
// tslint:disable-next-line:import-spacing
// tslint:disable-next-line:import-spacing
import { CardComponent } from './card/card.component';
// tslint:disable-next-line:import-spacing
import { ProductSalesChartComponent } from './charts/product-sales-chart/product-sales-chart.component';
import { SalesTrafficChartComponent } from './charts/sales-traffic-chart/sales-traffic-chart.component';
import { AnnualSalesChartComponent } from './charts/annual-sales-chart/annual-sales-chart.component';
import {StoreSessionsChartComponent} from '@app/charts/store-sessions-chart/store-sessions-chart.component';
// tslint:disable-next-line:import-spacing
import { OrdersTableComponent } from './orders-table/orders-table.component';
// tslint:disable-next-line:import-spacing
import { MiniCardComponent } from './mini-card/mini-card.component';
import { SalesComponent } from './sales/sales.component';
import { MaterialModule } from './material.module';
import { AddTenantComponent } from './add-tenant/add-tenant/add-tenant.component';
import { SearchTenantComponent } from './search-tenant/search-tenant/search-tenant.component';


@ NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    HomeComponent,
    NavComponent,
    DashComponent,
    CardComponent,
    SalesComponent,
    ProductSalesChartComponent,
    SalesTrafficChartComponent,
    AnnualSalesChartComponent,
    StoreSessionsChartComponent,
    OrdersTableComponent,
    MiniCardComponent
,
    AddTenantComponent
,
    SearchTenantComponent  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    ChartsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ChartsModule,
    MaterialModule ,
    FormsModule,
    LayoutModule
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
