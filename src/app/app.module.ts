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
import { NavComponent } from './nav/nav.component';
// tslint:disable-next-line:import-spacing
import { LayoutModule } from '@angular/cdk/layout';
// tslint:disable-next-line:import-spacing
import { MatToolbarModule } from '@angular/material/toolbar';
// tslint:disable-next-line:import-spacing
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
// tslint:disable-next-line:import-spacing
import { DashComponent } from './dash/dash.component';
// tslint:disable-next-line:import-spacing
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
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
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatChipsModule } from '@angular/material/chips';
import { MiniCardComponent } from './mini-card/mini-card.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { SalesComponent } from './sales/sales.component';

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
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    ChartsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ChartsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule ,
    MatSortModule,
    MatChipsModule,
    MatProgressBarModule
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
