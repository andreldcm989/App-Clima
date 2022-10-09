import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DailyComponent } from './daily.component';

@NgModule({
  declarations: [DailyComponent],
  imports: [CommonModule],
  exports: [DailyComponent],
})
export class DailyModule {}
