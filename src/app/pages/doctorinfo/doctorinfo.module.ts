import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoctorinfoPageRoutingModule } from './doctorinfo-routing.module';

import { DoctorinfoPage } from './doctorinfo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DoctorinfoPageRoutingModule
  ],
  declarations: [DoctorinfoPage]
})
export class DoctorinfoPageModule {}
