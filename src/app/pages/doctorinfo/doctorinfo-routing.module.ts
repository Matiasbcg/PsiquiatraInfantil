import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoctorinfoPage } from './doctorinfo.page';

const routes: Routes = [
  {
    path: '',
    component: DoctorinfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoctorinfoPageRoutingModule {}
