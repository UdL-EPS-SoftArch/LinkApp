import {Component, Input, OnInit} from '@angular/core';
import {Meet} from '../../meet';
import {MeetService} from '../../meet.service';
import Swal from 'sweetalert2';
import {Router} from "@angular/router";

@Component({
  selector: 'app-meet-delete',
  templateUrl: './meet-delete.component.html',
  styleUrls: ['./meet-delete.component.css']
})
export class MeetDeleteComponent implements OnInit {

  @Input() meet: Meet;

  constructor(
    private meetService: MeetService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  deleteMeet(): void {
    if (this.meet) {
      Swal.fire({
        icon: 'warning',
        title: 'Are you sure?',
        text: 'You won\'t be able to revert this!',
        confirmButtonText: 'Yes, delete',
        showCancelButton: true
      }).then((result) => {
        if (result.isConfirmed) {
          this.meetService.deleteResource(this.meet).subscribe(
            () => {
              Swal.fire(
                'Deleted!',
                'The meet has been deleted.',
                'success'
              ).then(() => {
                this.router.navigate(['']);
              });
            }
          );
        }
      })
    }
  }

}
