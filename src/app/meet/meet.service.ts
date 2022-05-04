import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HateoasResourceOperation, ResourceCollection } from '@lagoshny/ngx-hateoas-client';
import {Meet} from './meet';

@Injectable({providedIn: 'root'})
export class MeetService extends HateoasResourceOperation<Meet> {

  constructor() {
    super(Meet);
  }

  /*
  public findByUsernameContaining(query: string): Observable<ResourceCollection<Meet>> {
    return this.searchCollection('findByUsernameContaining', { params: { text: query } });
  }
   */
}
