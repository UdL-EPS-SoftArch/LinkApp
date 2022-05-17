import {HateoasResource, Resource} from '@lagoshny/ngx-hateoas-client';
import { User } from '../login-basic/user';
import {Group} from '../group/Group';

@HateoasResource('userrolekeys')
export class UserRoleKey extends Resource  {
  group: string;
  user: string;
}
