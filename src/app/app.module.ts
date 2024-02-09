import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountdetailsComponent } from './accountdetails/accountdetails.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarModule } from 'primeng/toolbar';
import { MenubarModule } from 'primeng/menubar';
import { TransactiondetailsgridComponent } from './transactiondetailsgrid/transactiondetailsgrid.component';
import { SplitterModule } from 'primeng/splitter';
import { AgGridModule } from 'ag-grid-angular';
import { ChartModule } from 'primeng/chart';
import { ExpensesplitupComponent } from './expensesplitup/expensesplitup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { CommonModule } from '@angular/common';
import { PushModule } from '@ngrx/component';
import { CustomLableComponent } from './customtype/customInput.component';


@NgModule({
  declarations: [
    AppComponent,
    AccountdetailsComponent,
    TransactiondetailsgridComponent,
    ExpensesplitupComponent,
    CustomLableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToolbarModule ,
    MenubarModule,
    SplitterModule,
    AgGridModule,
    ChartModule,
    FormsModule,
    ReactiveFormsModule,
    FormlyModule.forRoot({
      types: [
        { name: 'label', component: CustomLableComponent },
      ],
    }),
    FormlyBootstrapModule,
    CommonModule,
    PushModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
