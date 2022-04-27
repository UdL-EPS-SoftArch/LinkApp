import {HateoasResource, Resource} from '@lagoshny/ngx-hateoas-client';

@HateoasResource('groups')
export class Group extends Resource  {
  title: string;
  description: string;
  visibility: string;
}
