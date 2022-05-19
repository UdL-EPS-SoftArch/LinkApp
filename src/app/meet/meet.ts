import {HateoasResource, Resource} from '@lagoshny/ngx-hateoas-client';
import {Group} from "../group/group";

@HateoasResource('meets')
export class Meet extends Resource {
  id: bigint;
  group: Group;
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
