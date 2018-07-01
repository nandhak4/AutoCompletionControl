import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AutoCompleteModule } from './autocompletion/autocomplete.module';

@NgModule({
  imports: [BrowserModule, AutoCompleteModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}