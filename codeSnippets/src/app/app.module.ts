import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoadingComponentComponent } from './components/loading-component/loading-component.component';


@NgModule({
  declarations: [
    AppComponent,
    LoadingComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
