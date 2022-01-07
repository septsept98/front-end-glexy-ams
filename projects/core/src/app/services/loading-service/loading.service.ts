import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  load? : Observer<boolean | null>
  load$? : Observable<boolean | null>

  constructor() { 

    this.load$ = new Observable <boolean | null>(
      obs => this.load = obs
    )
  }

  onLoading(loading : boolean): void {
    this.load?.next(loading)
  }

}
