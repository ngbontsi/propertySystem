import {Component, OnInit} from '@angular/core';

import { User } from '@app/_models';
import { AccountService } from '@app/_services';
import {StoreSummary} from '@app/store-summary/store-summary';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {map} from 'rxjs/operators';
import {StoreSummaryService} from '@app/store-summary/store-summary.service';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent implements OnInit{
    user: User;
  miniCardData: StoreSummary[];
  cardLayout = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return {
          columns: 1,
          miniCard: { cols: 1, rows: 1 },
          chart: { cols: 1, rows: 2 },
          table: { cols: 1, rows: 4 },
        };
      }

      return {
        columns: 4,
        miniCard: { cols: 1, rows: 1 },
        chart: { cols: 2, rows: 2 },
        table: { cols: 4, rows: 4 },
      };
    })
  );

  ngOnInit() {
    this.summaryService.getStoreSummary().subscribe({
      next: summaryData => {
        this.miniCardData = summaryData;
      }
    });
  }
  // tslint:disable-next-line:max-line-length
    constructor(private accountService: AccountService, private breakpointObserver: BreakpointObserver, private summaryService: StoreSummaryService) {
        this.user = this.accountService.userValue;
    }
}
