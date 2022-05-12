import {User} from '../login-basic/user';
import {Group} from '../group-structure/group';
import {HateoasResource, Resource} from '@lagoshny/ngx-hateoas-client';

@HateoasResource('userRoleKeys')
export class UserRoleKey extends Resource {
  user: User;
  group: Group;

  constructor(values: object = {}) {
    super();
    Object.assign(this as any, values);
  }
}
