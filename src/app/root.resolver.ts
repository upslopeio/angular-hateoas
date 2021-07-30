import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import EntityModel from './entity-model';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RootResolver implements Resolve<EntityModel<Object>> {

  private links?: EntityModel<Object>;

  constructor(private httpClient: HttpClient) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<EntityModel<Object>> {
    if (this.links) {
      return of(this.links);
    } else {
      return this.httpClient.get<EntityModel<Object>>("http://localhost:4200/assets/root.json").pipe(
        tap(response => this.links = response),
        map(response => response),
      );
    }
  }
}
