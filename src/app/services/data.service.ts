import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private _data: string = "data from DataService";

  constructor() { }

  delayedStringReturn() {
    return of(this.data).pipe(
      delay(5000)
    );
  }

  get data(): string {
    return this._data;
  }

}
