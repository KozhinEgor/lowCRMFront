import {Component, OnInit, ViewChild} from '@angular/core';
import {EChartsOption} from "echarts";
import {ActivatedRoute} from "@angular/router";
import {FilterReport, ParametrReport, ShowValues} from "../../core/Classes";
import {ApiService} from "../../service/api.service";
import {SelectGroupComponent} from "../../selectField/select-group/select-group.component";
import {TypeFilter} from "../../Enumeration";

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  load: boolean = false;
  panelOpenState: boolean = false;
  report:ParametrReport;
  @ViewChild(SelectGroupComponent)
  private selectGroupComponent:SelectGroupComponent;
  constructor( private route: ActivatedRoute, private api:ApiService) { }

  ngOnInit() {
    this.route.params.subscribe(event => {
      this.api.getParametrReport(event['nameReport']).subscribe(data =>{
        this.report = data;

        this.selectGroupComponent.start(this.report.group);
        console.log(this.report);
      });
    });
  }
  saveReportParametr(){}
  showReport(){
    this.load = true;
    this.api.showReport(this.report);
      // .subscribe(data => { console.log(data); this.load = false;});
    this.load = false;
  }
  colors = ['#0033CC', '#00CC33','#00FFFF','#FF00FF',
    '#CC0000','#336600','#990033','#CC9933',
    '#993366','#0099CC', '#993300','#996633',
    '#996699','#333333','#663399','#330099',
    '#333399','#009966','#FFFF00','#339933',
    '#336699', '#CC0099','#006666','#990099',
    '#33CCCC','#000099','#00CC66','#003399',
    '#003300','#FF0033','#339900','#996666',
    '#669900','#333300','#999900','#660099'];
  chartOption: EChartsOption = {
    color: this.colors,
    tooltip: {
      trigger: 'item'
    },
    legend: {
      top: '5%',
      left: 'center'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: true,
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '40',
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: [
          { value: 1048, name: 'Search Engine' },
          { value: 735, name: 'Direct' },
          { value: 580, name: 'Email' },
          { value: 484, name: 'Union Ads' },
          { value: 300, name: 'Video Ads' }
        ]
      }
    ]
  }
/*colors = ['#5470C6', '#91CC75', '#EE6666'];
chartOption : EChartsOption = {
  color: this.colors,
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross'
    }
  },
  grid: {
    right: '20%'
  },
  toolbox: {
    feature: {
      dataView: { show: true, readOnly: false },
      restore: { show: true },
      saveAsImage: { show: true }
    }
  },
  legend: {
    data: ['Evaporation', 'Precipitation', 'Temperature']
  },
  xAxis: [
    {
      type: 'category',
      axisTick: {
        alignWithLabel: true
      },
      // prettier-ignore
      data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    }
  ],
  yAxis: [
    {
      type: 'value',
      name: 'Evaporation',
      position: 'right',
      alignTicks: true,
      axisLine: {
        show: true,
        lineStyle: {
          color: this.colors[0]
        }
      },
      axisLabel: {
        formatter: '{value} ml'
      }
    },
    {
      type: 'value',
      name: 'Precipitation',
      position: 'right',
      alignTicks: true,
      offset: 80,
      axisLine: {
        show: true,
        lineStyle: {
          color: this.colors[1]
        }
      },
      axisLabel: {
        formatter: '{value} ml'
      }
    },
    {
      type: 'value',
      name: '温度',
      position: 'left',
      alignTicks: true,
      axisLine: {
        show: true,
        lineStyle: {
          color: this.colors[2]
        }
      },
      axisLabel: {
        formatter: '{value} °C'
      }
    }
  ],
  series: [
    {
      name: 'Evaporation',
      type: 'bar',
      data: [
        { value: 1048, name: 'Search Engine' },
        { value: 735, name: 'Direct' },
        { value: 580, name: 'Email' },
        { value: 484, name: 'Union Ads' },
        { value: 300, name: 'Video Ads' }
      ]
    },
    {
      name: 'Precipitation',
      type: 'bar',
      yAxisIndex: 1,
      data: [
        2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3
      ]
    },
    {
      name: 'Temperature',
      type: 'line',
      yAxisIndex: 2,
      data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
    }
  ]
};*/

  selectFilter(filter:FilterReport){
    if(filter.disabled === false){
      filter.disabled = true;
      return
    }
    else {
      filter.disabled = false;
    }
  }
  selectValue(value:ShowValues){

    if(value.disabled == false){
      value.disabled = true;
    }
    else{
      value.disabled = false;
      let index = this.report.showValues.filter(a => a.disabled == false).indexOf(value);
      value.color = this.colors[index];
    }
  }
}
