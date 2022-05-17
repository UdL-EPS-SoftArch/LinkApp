import {HateoasResource, Resource} from '@lagoshny/ngx-hateoas-client';
import { User } from '../login-basic/user';
import {Group} from '../group/Group';
import {UserRoleEnum} from './UserRoleEnum';
import {UserRoleKey} from './RoleKey';

@HateoasResource('userRoles')
export class UserRole extends Resource  {
  roleKey: UserRoleKey;
  role: string;
}
