import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactComponent } from '../info/components/contact/contact.component';

import { InfoRoutingModule } from './info-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [
    ContactComponent,
    AboutComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    InfoRoutingModule
  ]
})
export class InfoModule {

}
