import {HateoasResource, Resource} from '@lagoshny/ngx-hateoas-client';
import { User } from '../login-basic/user';
import {UserRoleEnum} from './UserRoleEnum';
import {UserRoleKey} from './RoleKey';

@HateoasResource('userRoles')
export class UserRole extends Resource  {
  roleKey: UserRoleKey;
  role: string;
}
