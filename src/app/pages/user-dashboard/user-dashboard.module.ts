import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { UserDashboardComponent } from './user-dashboard.component';
import { UserDashboardRoutingModule } from './user-dashboard-routing.module';
import { CarsCardCarouselModule } from '../../cars/cars-card-carousel/cars-card-carousel.module';
import { NotificationsListModule } from '../../cars/notifications/notifications-list/notifications-list.module';

@NgModule({
  declarations: [
    UserDashboardComponent
  ],
  imports: [
    CommonModule,
    UserDashboardRoutingModule,
    CarsCardCarouselModule,
    NotificationsListModule,
    MatDividerModule
  ]
})
export class UserDashboardModule { }
