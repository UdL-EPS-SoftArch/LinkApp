import { HateoasResource, Resource } from '@lagoshny/ngx-hateoas-client';

@HateoasResource('groups')
export class Group extends Resource {
  id: bigint;
  uri: string;
  title: string;
  description: string;
  visibility: string;
  themes: string[];

  constructor(values: object = {}) {
    super();
    Object.assign(this as any, values);
  }
}

