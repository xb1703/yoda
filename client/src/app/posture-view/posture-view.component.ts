import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { PostureService } from '../shared/posture/posture.service';

@Component({
  selector: 'app-posture-view',
  templateUrl: './posture-view.component.html',
  styleUrls: ['./posture-view.component.css']
})
export class PostureViewComponent implements OnInit, OnDestroy {

    posture: any = {};

    sub: Subscription;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private postureService: PostureService) {
    }

    ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.postureService.get(id).subscribe((posture: any) => {
          if (posture) {
            this.posture = posture;
            this.posture.href = posture._links.self.href;
          } else {
            console.log(`Posture with id '${id}' not found, returning to list`);
            this.gotoList();
          }
        });
      }
    });
  }

  gotoList() {
    this.router.navigate(['/postures']);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
