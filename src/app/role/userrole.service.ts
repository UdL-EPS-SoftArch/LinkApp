import { Injectable } from '@angular/core';
import { HateoasResourceOperation } from '@lagoshny/ngx-hateoas-client';
import {UserRole} from './UserRole';

@Injectable({providedIn: 'root'})
export class UserRoleService extends HateoasResourceOperation<UserRole> {

  constructor() {
    super(UserRole);
  }

}
