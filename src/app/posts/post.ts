import { HateoasResource, Resource } from '@lagoshny/ngx-hateoas-client';

@HateoasResource('posts')
export class Post extends Resource {
  uri: string;
  text: string;
  group: string;
  father: string;
  author: string;


  constructor(values: object = {}) {
    super();
    Object.assign(this as any, values);
  }
}
