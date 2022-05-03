import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HateoasResourceOperation, ResourceCollection } from '@lagoshny/ngx-hateoas-client';
import { Message } from './message';

@Injectable({providedIn: 'root'})
export class ChatService extends HateoasResourceOperation<Message> {

  constructor() {
    super(Message);
  }

  public findByMeetContaining(query: string): Observable<ResourceCollection<Message>> {
    return this.searchCollection('findByMeetContaining', { params: { text: query } });
  }
}
