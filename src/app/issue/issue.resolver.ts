import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import EntityModel from '../entity-model';
import Issue from '../issues/issue';
import template from 'url-template';

@Injectable({
  providedIn: 'root'
})
export class IssueResolver implements Resolve<EntityModel<Issue>> {
  constructor(private httpClient: HttpClient) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<EntityModel<Issue>> {
    const templatedUrl = template.parse(route.parent!.data.links._links['issues:find'].href);
    const url = templatedUrl.expand({ id: route.params.id });
    return this.httpClient.get<EntityModel<Issue>>(url);
  }
}
