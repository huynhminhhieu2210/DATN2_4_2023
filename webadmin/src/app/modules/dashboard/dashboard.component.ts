import { BARCHART } from './../../core/models/BARCHART';
import { Component, Injector, OnInit } from '@angular/core';
import { ChartOptions } from 'chart.js';
import { ComponentBase } from 'src/app/shared/components/component-base';
import 'chart.piecelabel.js';
import * as moment from 'moment';
import { DashboardService } from 'src/app/core/services/dashboard.service';
import { CHART_BAR_FILTER } from 'src/app/core/models/CHART_BAR_FILTER';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent extends ComponentBase implements OnInit{
  ngOnInit(): void {
    this.todate = moment().format('yyyy-MM-DD');
    var date =  moment().year().toString() + '-' + (moment().month() - 3).toString() + '-01'
    if(Number(moment().month()) - 3 <= 0){
      date = moment().year().toString() + '-01-01';
    }
    this.fromdate = moment(date).format('yyyy-MM-DD');
    this.LoadChart1();
  }
  constructor(
    injector: Injector,
    private dashboardService: DashboardService,
    ) {
    super(injector);
  }
  fromdate?: string;
  todate?: string;
  public ChartType = 'bar';
  chartLabels?: string[] = [];
  dataAcer?: number[] = [];
  dataAsus?: number[] = [];
  dataDell?: number[] = [];
  dataHp?: number[] = [];
  dataMsi?: number[] = [];
  chartData = [
    {
      data: this.dataAcer,
      label: 'ACER'
    },
    {
      data: this.dataAsus,
      label: 'ASUS'
    },
    {
      data: this.dataDell,
      label: 'DELL'
    },
    {
      data: this.dataHp,
      label: 'HP'
    },
    {
      data: this.dataMsi,
      label: 'MSI'
    }
  ];
  chartOptions = {
    legend: {
      display: true,
      labels: {
        fontColor: '#4286f4',
        backgroundColor: '#4286f4'
      }
    },
    plugins: {
      labels: {
        render: 'value',
      }
    },
  };
  LoadChart1(){
    this.dataAcer = [];
    this.dataAsus = [];
    this.dataDell = [];
    this.dataHp = [];
    this.dataMsi = [];
    this.chartLabels = [];
    var filterInput = new CHART_BAR_FILTER();
    filterInput.froM_DATE = moment(this.fromdate).add(1, 'day');
    filterInput.tO_DATE = moment(this.todate).add(1, 'day');
    this.dashboardService.Chart_bar_load(filterInput).subscribe((response: any)=>{
      var year = moment(this.fromdate).year();
      var month = moment(this.fromdate).month() + 1;
      var monthto = moment(this.todate).month() + 1;
      var yearto = moment(this.todate).year();
      for (;month <=  monthto || year < yearto; month++) {
        this.chartLabels?.push(month.toString() + '/' + year.toString())
        if(month == 12){
          month = 1;
          year = year + 1;
        }
        let res_data: BARCHART[];
        res_data = response;
        var dataAcerTmp = res_data.filter(x => x.type == '001' && parseInt(x.month!)  == month && parseInt(x.year!)  == year);
        if(dataAcerTmp.length > 0){
          this.dataAcer?.push(dataAcerTmp[0].data!);
        }
        else{
          this.dataAcer?.push(0);
        }
        var dataAsusTmp = res_data.filter(x => x.type == '002' && parseInt(x.month!)  == month && parseInt(x.year!)  == year);
        if(dataAsusTmp.length > 0){
          this.dataAsus?.push(dataAsusTmp[0].data!);
        }
        else{
          this.dataAsus?.push(0);
        }
        var dataDellTmp = res_data.filter(x => x.type == '003' && parseInt(x.month!)  == month && parseInt(x.year!)  == year);
        if(dataDellTmp.length > 0){
          this.dataDell?.push(dataDellTmp[0].data!);
        }
        else{
          this.dataDell?.push(0);
        }
        var dataHpTmp = res_data.filter(x => x.type == '004' && parseInt(x.month!)  == month && parseInt(x.year!)  == year);
        if(dataHpTmp.length > 0){
          this.dataHp?.push(dataHpTmp[0].data!);
        }
        else{
          this.dataHp?.push(0);
        }
        var dataMsiTmp = res_data.filter(x => x.type == '005' && parseInt(x.month!)  == month && parseInt(x.year!)  == year);
        if(dataMsiTmp.length > 0){
          this.dataMsi?.push(dataMsiTmp[0].data!);
        }
        else{
          this.dataMsi?.push(0);
        }
      }
      this.chartData = [
        {
          data: this.dataAcer,
          label: 'ACER'
        },
        {
          data: this.dataAsus,
          label: 'ASUS'
        },
        {
          data: this.dataDell,
          label: 'DELL'
        },
        {
          data: this.dataHp,
          label: 'HP'
        },
        {
          data: this.dataMsi,
          label: 'MSI'
        }
      ];
    });
  }
  // Pie
  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: false,
  };
  public pieChartLabels = [ [ 'ACER' ], [ 'ASUS' ], ['DELL'], ['HP'], ['MSI']  ];
  public pieChartDatasets = [ {
    data: [ 300, 500, 100 ]
  } ];
  public pieChartLegend = true;
  public pieChartPlugins = [];
}
