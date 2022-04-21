import {HateoasResource, Resource} from '@lagoshny/ngx-hateoas-client';

@HateoasResource('meets')
export class Meet extends Resource {
  id: string;
  group: string;
  title: string;
  status: boolean;
  description: string;
  creationDate: string;
  lastUpdate: string;
  initialMeetDate: string;
  finalMeetDate: string;
  maxUsers: bigint;
  location: string;

  constructor(values: object = {}) {
    super();
    Object.assign(this as any, values);
  }
}
