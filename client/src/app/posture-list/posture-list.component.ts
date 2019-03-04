import { Component, OnInit } from '@angular/core';
import { PostureService } from '../shared/posture/posture.service';

@Component({
  selector: 'app-posture-list',
  templateUrl: './posture-list.component.html',
  styleUrls: ['./posture-list.component.css']
})
export class PostureListComponent implements OnInit {

  postures: Array<any>;

  constructor(private postureService: PostureService) { }

  ngOnInit() {
    this.postureService.getAll().subscribe(data => {
      this.postures = data;
    });
  }

}
