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
                    label: 'First Dataset',
                    data: [1000,2000,786,3000],
                    datalabels: {
                        align: 'end',
                        anchor: 'start'
                    },
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(255, 205, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(201, 203, 207, 0.2)'
                      ],
                      borderColor: [
                        'rgb(255, 99, 132)',
                        'rgb(255, 159, 64)',
                        'rgb(255, 205, 86)',
                        'rgb(75, 192, 192)',
                        'rgb(54, 162, 235)',
                        'rgb(153, 102, 255)',
                        'rgb(201, 203, 207)'
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
