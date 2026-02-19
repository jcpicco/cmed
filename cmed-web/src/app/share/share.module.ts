import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CoreModule } from '@core/core.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, ReactiveFormsModule, CoreModule, RouterModule],
})
export class ShareModule {}
