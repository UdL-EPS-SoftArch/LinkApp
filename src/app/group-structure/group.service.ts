import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HateoasResourceOperation, ResourceCollection } from '@lagoshny/ngx-hateoas-client';
import { Group } from './group';

@Injectable({providedIn: 'root'})
export class GroupService extends HateoasResourceOperation<Group> {

  constructor() {
    super(Group);
  }

  getGroup() {
    const group = new Group();
    group.id = '122';
    group.title = 'GEIADE';
    group.description = 'setrdtfgyhukj';
    return group;
  }

}
