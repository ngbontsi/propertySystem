import {Component, OnInit} from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import {StoreSummaryService} from '@app/store-summary/store-summary.service';
import {StoreSummary} from '@app/store-summary/store-summary';
import {User} from '@app/_models';
import {AccountService} from '@app/_services';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.less']
})
export class DashComponent implements OnInit{
  /** Based on the screen size, switch from standard to one column per row */

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
