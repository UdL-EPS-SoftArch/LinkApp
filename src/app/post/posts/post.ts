import { HateoasResource, Resource } from '@lagoshny/ngx-hateoas-client';
import {User} from '../../login-basic/user';
import {Group} from '../../group-structure/group';

@HateoasResource('posts')
export class Post extends Resource {
  uri: string;
  text: string;
  group: Group;
  father: Post;
  author: User;


  constructor(values: object = {}) {
    super();
    Object.assign(this as any, values);
  }
}
