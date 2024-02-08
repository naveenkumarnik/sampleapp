import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountdetailsComponent } from './accountdetails/accountdetails.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarModule } from 'primeng/toolbar';
import { MenubarModule } from 'primeng/menubar';
import { TransactiondetailsgridComponent } from '../transactiondetailsgrid/transactiondetailsgrid.component';
import { SplitterModule } from 'primeng/splitter';
import { AgGridModule } from 'ag-grid-angular';
import { ChartModule } from 'primeng/chart';


@NgModule({
  declarations: [
    AppComponent,
    AccountdetailsComponent,
    TransactiondetailsgridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToolbarModule ,
    MenubarModule,
    SplitterModule,
    AgGridModule,
    ChartModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
