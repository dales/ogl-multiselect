import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MultiSelectComponent } from './multiselect/multi-select/multi-select.component';
import { MultiSelectOptionComponent } from './multiselect/multi-select-option/multi-select-option.component';
import { MultiSelectGroupComponent } from './multiselect/multi-select-group/multi-select-group.component';

@NgModule({
  declarations: [
    AppComponent,
    MultiSelectComponent,
    MultiSelectOptionComponent,
    MultiSelectGroupComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
