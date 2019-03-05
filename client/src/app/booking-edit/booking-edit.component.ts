import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingService } from '../shared/booking/booking.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-booking-edit',
  templateUrl: './booking-edit.component.html',
  styleUrls: ['./booking-edit.component.css']
})
export class BookingEditComponent implements OnInit {

  booking: any = {};

  sub: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private bookingService: BookingService) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.bookingService.get(id).subscribe((booking: any) => {
          if (booking) {
            this.booking = booking;
            this.booking.href = booking._links.self.href;
          } else {
            console.log(`Booking with id '${id}' not found, returning to list`);
            this.gotoList();
          }
        });
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  gotoList() {
    this.router.navigate(['/booking-list']);
  }

  save(form: NgForm) {
    this.bookingService.save(form).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }

  remove(href) {
    this.bookingService.remove(href).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }

}
