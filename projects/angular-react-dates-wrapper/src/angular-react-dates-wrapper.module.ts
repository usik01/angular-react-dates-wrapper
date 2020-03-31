import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleDatePickerComponent } from './lib/single-date-picker/single-date-picker.component';
import { DateRangePickerComponent } from './lib/date-range-picker/date-range-picker.component';

@NgModule({
  declarations: [
    SingleDatePickerComponent,
    DateRangePickerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SingleDatePickerComponent,
    DateRangePickerComponent
  ]
})
export class AngularReactDatesWrapperModule {

  static forRoot(options?: any): ModuleWithProviders {
    return {
      ngModule: AngularReactDatesWrapperModule
    };
  }

}
