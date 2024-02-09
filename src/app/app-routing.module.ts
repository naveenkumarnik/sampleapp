import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransactiondetailsgridComponent } from './transactiondetailsgrid/transactiondetailsgrid.component';
import { AccountdetailsComponent } from './accountdetails/accountdetails.component';
import { ExpensesplitupComponent } from './expensesplitup/expensesplitup.component';

const routes: Routes = [
  { path: 'accountdetails', component: AccountdetailsComponent },
  { path: 'transactiondetailsgrid', component: TransactiondetailsgridComponent},
  { path: 'monthlyexpensesplitup', component: ExpensesplitupComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
