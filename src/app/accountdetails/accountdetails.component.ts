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
                    data: [65, 59, 80, 81, 56, 55, 40],
                    datalabels: {
                      align: 'end',
                      anchor: 'start'
                    }
                },
                {
                    label: 'Second Dataset',
                    data: [28, 48, 40, 19, 86, 27, 90]
                }
            ]
        }
    
        this.options = {
            title: {
                display: true,
                text: 'My Title',
                fontSize: 16
            },
            legend: {
                position: 'bottom'
            },
            plugins: {
                        datalabels: {
                            color: 'white',
                            display: function(context: any) {
                                return context.dataset.data[context.dataIndex] > 15;
                            },
                            font: {
                                weight: 'bold'
                            },
                            formatter: Math.round
                        }
                    }
        };
    }
    reinit() {
        this.chart.reinit();
      }

}
