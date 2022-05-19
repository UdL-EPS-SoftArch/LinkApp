import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Observable, of, OperatorFunction} from 'rxjs';
import {catchError, debounceTime, distinctUntilChanged, map, switchMap, tap} from 'rxjs/operators';
import {ResourceCollection} from '@lagoshny/ngx-hateoas-client';
import {Group} from '../group';
import {GroupService} from '../group.service';

@Component({
  selector: 'app-group-search',
  templateUrl: './group-search.component.html',
  styleUrls: ['./group-search.component.css']
})

export class GroupSearchComponent {
  @Output() emitResults: EventEmitter<Group> = new EventEmitter();
  searchFailed = false;
  searching = false;

  constructor(private groupService: GroupService) {
  }

  autocomplete: OperatorFunction<string, readonly Group[]> = (title$: Observable<string>) =>
    title$.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      tap(() => this.searching = true),
      switchMap(term => term.length < 3 ? of([]) :
        this.groupService.findByTitleContaining(term).pipe(
          map((collection: ResourceCollection<Group>) => collection.resources),
          tap(() => this.searchFailed = false),
          catchError(() => {
            this.searchFailed = true;
            return of([]);
          })
        )
      ),
      tap(() => this.searching = false )
    )

  select(item: any): void {
    this.emitResults.emit(item as Group);
  }
}

