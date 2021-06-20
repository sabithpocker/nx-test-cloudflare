import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ScullyLibModule } from '@scullyio/ng-lib';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, 
    RouterModule.forRoot([], { initialNavigation: 'enabled' }),
    ScullyLibModule,ScullyLibModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
