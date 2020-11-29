import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { SharedModule } from './shared/shared.module'; 
import { AppComponent } from './app.component';
import { ServersService } from './shared/servers.service';
import { ContentService } from './shared/content.service';
import { Sample } from './sample/sample.component';


@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule, 
    FlexLayoutModule, 
    SharedModule ],
  declarations: [ 
    AppComponent,
    Sample
    ],
  providers: [ 
    ServersService,
    ContentService
    ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
