import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MeetService} from "../meet.service";

@Component({
  selector: 'app-meet-card-list',
  templateUrl: './meet-card-list.component.html',
  styleUrls: ['./meet-card-list.component.css']
})
export class MeetCardListComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private meetService: MeetService) { }

  meetList=[];

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.meetService.findByGroup("/groups/" + id).subscribe(
      meetList => {
        this.meetList = meetList.resources;
      }
    )
  }

}
