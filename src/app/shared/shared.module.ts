import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PageNotFoundComponent } from './not-found.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    PageNotFoundComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    PageNotFoundComponent
  ]
})
export class SharedModule {}
