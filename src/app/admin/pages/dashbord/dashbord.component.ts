import { Component, OnInit } from '@angular/core';
//import { categoryData } from './datasource';
import { IAxisLabelRenderEventArgs } from '@syncfusion/ej2-angular-charts';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent  implements OnInit {
  public primaryXAxis?: Object;
  public chartData?: Object[];
  public title?: string;
  public legendSettings: Object = { visible: false};
  primaryYAxis: any;
  public axisLabelRender(args : IAxisLabelRenderEventArgs ): void {
      if(args.text === 'France') {
          args.labelStyle.color = 'Red';
      }
  };
  ngOnInit(): void {
   //   this.chartData = categoryData;
      this.primaryXAxis = {
         valueType: 'Category',
         title: 'Countries'
      };
      this.title = 'Olympic Medals';
  }

}