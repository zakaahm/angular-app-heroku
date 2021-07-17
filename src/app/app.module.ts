import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuraanComponent } from './quraan/quraan.component';
import { HttpClientModule } from '@angular/common/http';
import { VersesComponent } from './verses/verses.component';
import { FaqComponent } from './faq/faq.component';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';

//import { MatModules } from '../AllMatModules';




@NgModule({
  declarations: [
    AppComponent,
    QuraanComponent,
    VersesComponent,
    FaqComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    FormsModule
    //MatModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
