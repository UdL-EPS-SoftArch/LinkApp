import {HateoasResource, Resource} from '@lagoshny/ngx-hateoas-client';

@HateoasResource('groups')
export class Group extends Resource  {
  id: bigint;
  title: string;
  description: string;
  visibility: string;
}
