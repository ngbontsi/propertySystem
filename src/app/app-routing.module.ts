import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { AuthGuard } from './_helpers';
import { DashComponent } from './dash/dash.component';
import {AddTenantComponent} from '@app/add-tenant/add-tenant/add-tenant.component';
import {SearchTenantComponent} from '@app/search-tenant/search-tenant/search-tenant.component';

const accountModule = () => import('./account/account.module').then(x => x.AccountModule);
const usersModule = () => import('./users/users.module').then(x => x.UsersModule);

const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'dashboard', component: DashComponent, canActivate: [AuthGuard] },
  { path: 'add-tenant', component: AddTenantComponent, canActivate: [AuthGuard] },
  { path: 'search-tenant', component: SearchTenantComponent, canActivate: [AuthGuard] },
    { path: 'users', loadChildren: usersModule, canActivate: [AuthGuard] },
    { path: 'account', loadChildren: accountModule },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
