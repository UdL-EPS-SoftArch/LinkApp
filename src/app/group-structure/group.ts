import { HateoasResource, Resource } from '@lagoshny/ngx-hateoas-client';

@HateoasResource('groups')
export class Group extends Resource {
  id: string;
  title: string;
  description: string;

  constructor(values: object = {}) {
    super();
    Object.assign(this as any, values);
  }
}

