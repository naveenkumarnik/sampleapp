import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
    title = 'Track Your Expense';
    items!: MenuItem[];
    constructor(private router: Router) {
    }
    ngOnInit() {
        this.items = [
            {
                label: 'Transaction History',
                icon: 'pi pi-fw pi-book',
                // command:this.gridRoutingModule,
                command: () => this.gridRoutingModule()
            },
            {
                label: 'Monthly Expense',
                icon: 'pi pi-fw pi-chart-bar',
                command:() => this.monthlyExpenseRoutingModule()
            },
            {
                label: 'Expense Splitup',
                icon: 'pi pi-fw pi-chart-pie',
                command:() => this.expenseSplitupRoutingModule()
            }
        ];
    }

    gridRoutingModule() {
        console.log('test');
        this.router.navigate(['/transactiondetailsgrid'])
    }

    monthlyExpenseRoutingModule(){
        this.router.navigate(['/accountdetails'])
    }

    expenseSplitupRoutingModule(){
        this.router.navigate(['/monthlyexpensesplitup'])
    }

}
