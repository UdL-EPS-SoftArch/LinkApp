import {User} from '../login-basic/user';
import {Group} from '../group-structure/group';
import {HateoasResource, Resource} from '@lagoshny/ngx-hateoas-client';

@HateoasResource('userRoles')
export class UserRole extends Resource {
  roleKey: string;
  role: string;

  constructor(values: object = {}) {
    super();
    Object.assign(this as any, values);
  }
}
