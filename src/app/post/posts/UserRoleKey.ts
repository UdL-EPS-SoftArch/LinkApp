import {User} from '../../login-basic/user';
import {HateoasResource, Resource} from '@lagoshny/ngx-hateoas-client';
import {Group} from "../../group/group";

@HateoasResource('userRoleKeys')
export class UserRoleKey extends Resource {
  user: User;
  group: Group;

  constructor(values: object = {}) {
    super();
    Object.assign(this as any, values);
  }
}
