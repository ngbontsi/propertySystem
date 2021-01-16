import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {AccountService} from '@app/_services';
import {User} from '@app/_models';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.less']
})
export class NavComponent {
  toolbarTitle: string;
  user: User;
  menuItems = ['dashboard', 'Add Tenant', 'Search Tenant'];

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  constructor(private breakpointObserver: BreakpointObserver, private accountService: AccountService, private router: Router) {
    this.user = this.accountService.userValue;
    this.router.events.subscribe(
      (event: any) => {
        if (event instanceof NavigationEnd) {
          this.toolbarTitle =  this.router.url.replace('/', '');
        }
      }
    );
  }

  logout() {
    this.accountService.logout();
  }

}
