import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {AccountService} from '@app/_services';
import {User} from '@app/_models';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.less']
})
export class NavComponent {
  user: User;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  menuItems = ['dashboard', 'Add Tenant', 'Search Tenant'];
  constructor(private breakpointObserver: BreakpointObserver, private accountService: AccountService) {
    this.user = this.accountService.userValue;
  }

  logout() {
    this.accountService.logout();
  }

}
