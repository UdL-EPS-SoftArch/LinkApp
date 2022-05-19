import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HateoasResourceOperation, ResourceCollection } from '@lagoshny/ngx-hateoas-client';
import {Meet} from './meet';

  @Injectable({providedIn: 'root'})
export class MeetService extends HateoasResourceOperation<Meet> {

  constructor() {
    super(Meet);
  }

  public findByGroup(query: string): Observable<ResourceCollection<Meet>> {
    return this.searchCollection('findByGroup', { params: { group: query } });
  }
}
