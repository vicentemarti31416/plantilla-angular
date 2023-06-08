import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private data: string = "data from DataService";

  constructor() { }

  delayedStringReturn(): Observable<string> {
    return of(this.data).pipe(
      delay(4000)
    );
  }

}
