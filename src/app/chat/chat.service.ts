import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HateoasResourceOperation, ResourceCollection } from '@lagoshny/ngx-hateoas-client';
import { Message } from '../login-basic/message';

@Injectable({providedIn: 'root'})
export class ChatService extends HateoasResourceOperation<Message> {

  constructor() {
    super(User);
  }

  public findByUsernameContaining(query: string): Observable<ResourceCollection<User>> {
    return this.searchCollection('findByUsernameContaining', { params: { text: query } });
  }
}
