import { HateoasResource, Resource } from '@lagoshny/ngx-hateoas-client';
import {User} from '../login-basic/user';
import {Meet} from '../meet/meet';
import {Group} from '../group/group';

@HateoasResource('messages')
export class Message extends Resource {
  id: string;
  creationDate: Date;
  text: string;
  author: User;
  meet: Meet;
  group: Group;
  uri: string;

  constructor(values: object = {}) {
    super();
    Object.assign(this as any, values);
  }
}
