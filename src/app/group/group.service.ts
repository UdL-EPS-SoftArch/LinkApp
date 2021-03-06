import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Group} from './group';
import {GROUPS} from '../mock-groups';
import {HateoasResourceOperation, ResourceCollection} from '@lagoshny/ngx-hateoas-client';

@Injectable({
  providedIn: 'root'
})
export class GroupService extends HateoasResourceOperation<Group> {
  private apiUrl = 'http://localhost:8080/groups';

  constructor(private http: HttpClient) {
    super(Group);
  }

  public findByTitleContaining(query: string): Observable<ResourceCollection<Group>> {
    return this.searchCollection('findByTitleContaining', { params: { title: query } });
  }

}
