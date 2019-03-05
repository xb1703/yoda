import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostureListComponent } from './posture-list/posture-list.component';
import { PostureViewComponent } from './posture-view/posture-view.component';
import { BookingEditComponent } from './booking-edit/booking-edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/postures', pathMatch: 'full' },
  {
    path: 'postures',
    component: PostureListComponent
  },
  {
    path: 'postures/:id',
    component: PostureViewComponent
  },
  {
    path: 'booking',
    component: BookingEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
