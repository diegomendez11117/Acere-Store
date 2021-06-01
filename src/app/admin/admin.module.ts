import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './../material/material.module';
import { DefaultComponent } from './components/default/default.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashHeaderComponent } from './components/dash-header/dash-header.component';
import { DashFooterComponent } from './components/dash-footer/dash-footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PostsComponent } from './components/posts/posts.component';
import { AreaComponent } from './components/area/area.component';
import { CardComponent } from './components/card/card.component';
import { PieComponent } from './components/pie/pie.component';



@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    DashHeaderComponent,
    DashFooterComponent,
    SidebarComponent,
    PostsComponent,
    AreaComponent,
    CardComponent,
    PieComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
  ]
})
export class AdminModule { }
