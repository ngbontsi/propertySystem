import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { StoreSummary } from './store-summary';

@Injectable({
  providedIn: 'root'
})
export class StoreSummaryService {

  getStoreSummary(): Observable<StoreSummary[]> {
    return of([
      // tslint:disable-next-line:max-line-length
      { title: 'Total Rentals', value: '9465', isIncrease: true, color: 'primary', percentValue: '0.5383', icon: 'payments', isCurrency: true },
      // tslint:disable-next-line:max-line-length
      { title: 'Average Tenants', value: '465', isIncrease: false, color: 'accent', percentValue: '0.2544', icon: 'bed', isCurrency: true },
      // tslint:disable-next-line:max-line-length
      { title: 'Total Rentals', value: '243', isIncrease: true, color: 'warn', percentValue: '0.4565', icon: 'store-alt', isCurrency: false },
      // tslint:disable-next-line:max-line-length
      { title: 'Returning Tenants', value: '35', isIncrease: false, color: 'primary', percentValue: '0.8361', icon: 'portrait', isCurrency: false }
    ]);
  }

  constructor() { }
}
