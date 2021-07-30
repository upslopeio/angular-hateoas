import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import CollectionModel from '../collection-model';
import Issue from './issue';

@Injectable({
  providedIn: 'root',
})
export class IssuesResolver implements Resolve<CollectionModel<Issue>> {
  constructor(private httpClient: HttpClient) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<CollectionModel<Issue>> {
    const url = route.parent!.data.links._links.issues.href;
    return this.httpClient.get<CollectionModel<Issue>>(url);
  }
}
