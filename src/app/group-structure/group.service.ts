import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HateoasResourceOperation, ResourceCollection } from '@lagoshny/ngx-hateoas-client';
import { Group } from './group';
import {User} from '../login-basic/user';
import {Meet} from "../meet/meet";

@Injectable({providedIn: 'root'})
export class GroupService extends HateoasResourceOperation<Group> {

  constructor() {
    super(Group);
  }

  /*getGroupFromId(id: string) {
    const group = new Group();
    group.id = '122';
    group.title = 'GEIADE';
    group.description = 'setrdtfgyhukj';
    return group;
  }
*/
  public findByTitleContaining(query: string): Observable<ResourceCollection<Group>> {
    return this.searchCollection('findByTitleContaining', { params: { text: query } });
  }

}
