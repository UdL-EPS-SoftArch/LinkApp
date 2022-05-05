import {HateoasResource, Resource} from '@lagoshny/ngx-hateoas-client';

@HateoasResource('groups')
export class Group extends Resource  {
  uri: string;
  title: string;
  description: string;
  visibility: string;
}
