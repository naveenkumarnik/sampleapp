import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransactiondetailsgridComponent } from '../transactiondetailsgrid/transactiondetailsgrid.component';
import { AccountdetailsComponent } from './accountdetails/accountdetails.component';

const routes: Routes = [
  { path: 'transactiondetailsgrid', component: TransactiondetailsgridComponent},
  { path: 'accountdetails', component: AccountdetailsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
