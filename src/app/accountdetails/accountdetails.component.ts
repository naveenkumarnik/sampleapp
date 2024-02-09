import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
    selector: 'app-accountdetails',
    templateUrl: './accountdetails.component.html',
    styleUrl: './accountdetails.component.scss'
})
export class AccountdetailsComponent implements OnInit {
    data: any;
    options: any;
    @ViewChild('chart') chart: any;
    ngOnInit(): void {
        this.data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'Expense',
                    data: [1000,2000,786,3000],
                    datalabels: {
                        align: 'end',
                        anchor: 'start'
                    },
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                      ],
                      borderColor: [
                        'rgb(255, 99, 132)',
            
                      ],
                      borderWidth: 1
                },
                {
                    label: 'Savings',
                    data: [500,200,700,1000],
                    datalabels: {
                        align: 'end',
                        anchor: 'start'
                    },
                    backgroundColor: [
                        'rgba(75, 192, 192, 0.2)',
                      ],
                      borderColor: [
                        'rgb(75, 192, 192)',
                      ],
                      borderWidth: 1
                },
               
            ],
            
        }

        this.options = {
            tooltips: {
                mode: 'index',
                intersect: false
            },
            plugins: {
                datalabels: {
                    display: function (context: any) {
                        console.log(context.dataset.data[context.dataIndex])
                        return context.dataset.data[context.dataIndex] > 50;
                    },
                    font: {
                        weight: 'bold'
                    },
                    formatter: Math.round
                }
            }
        };
    }

    onDataSelect(event: any){
        console.log(event);
    }
}
