import {HateoasResource, Resource} from '@lagoshny/ngx-hateoas-client';
import { User } from '../login-basic/user';

@HateoasResource('userrolekeys')
export class UserRoleKey extends Resource  {
  group: string;
  user: string;
}
