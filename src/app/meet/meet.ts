import {HateoasResource, Resource} from '@lagoshny/ngx-hateoas-client';

@HateoasResource('meets')
export class Meet extends Resource {
  group: string;
  title: string;
  status: boolean;
  description: string;
  creationDate: Date;
  lastUpdate: Date;
  initialMeetDate: Date;
  finalMeetDate: Date;
  maxUsers: bigint;
  location: string;

  constructor(values: object = {}) {
    super();
    Object.assign(this as any, values);
  }
}
