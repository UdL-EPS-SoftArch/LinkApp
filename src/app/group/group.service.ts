import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Group} from '../Group';
import {GROUPS} from '../mock-groups';
import {HateoasResourceOperation} from '@lagoshny/ngx-hateoas-client';

@Injectable({
  providedIn: 'root'
})
export class GroupService extends HateoasResourceOperation<Group> {
  private apiUrl = 'http://localhost:8080/groups';

  constructor(private http: HttpClient) {
    super(Group);
  }

  /* getGroups(): Observable<Group[]> {
    //return this.http.get<Group[]>(this.apiUrl);

  } */
}
