import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



//Routes
import { AppRoutingModule } from './app.routing';
import { InitComponent } from './init.component';

//Pages
import { HomeComponent } from './pages/Home/home.component';

@NgModule({
  declarations: [
       InitComponent,
       /*PAGES*/
       HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [InitComponent]
})
export class AppModule { }
