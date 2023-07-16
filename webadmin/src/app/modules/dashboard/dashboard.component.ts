import { BARCHART } from './../../core/models/BARCHART';
import { Component, Injector, OnInit } from '@angular/core';
import { ChartOptions } from 'chart.js';
import { ComponentBase } from 'src/app/shared/components/component-base';
import 'chart.piecelabel.js';
import * as moment from 'moment';
import { DashboardService } from 'src/app/core/services/dashboard.service';
import { CHART_BAR_FILTER } from 'src/app/core/models/CHART_BAR_FILTER';
import { PRODUCT } from 'src/app/core/models/PRODUCT';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent extends ComponentBase implements OnInit{
  ngOnInit(): void {
    this.todate1 = moment().format('yyyy-MM-DD');
    this.todate2 = moment().format('yyyy-MM-DD');
    var date =  moment().year().toString() + '-' + (moment().month() - 3).toString() + '-01'
    if(Number(moment().month()) - 3 <= 0){
      date = moment().year().toString() + '-01-01';
    }
    this.fromdate1 = moment(date).format('yyyy-MM-DD');
    this.fromdate2 = moment(date).format('yyyy-MM-DD');
    this.LoadChart1();
    this.LoadChart2();
    this.loadProduct1();
  }
  constructor(
    injector: Injector,
    private dashboardService: DashboardService,
    private productService: ProductService,
    ) {
    super(injector);
  }
  fromdate1?: string;
  todate1?: string;
  public ChartType = 'bar';
  chartLabels1?: string[] = [];
  dataAcer?: number[] = [];
  dataAsus?: number[] = [];
  dataDell?: number[] = [];
  dataHp?: number[] = [];
  dataMsi?: number[] = [];
  dataChart1?: number[] = [];
  chartData1 = [
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
  chartOptions1 = {
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
    this.dataChart1 = [];
    this.chartLabels1 = [];
    var filterInput = new CHART_BAR_FILTER();
    filterInput.froM_DATE = moment(this.fromdate1).add(1, 'day');
    filterInput.tO_DATE = moment(this.todate1).add(1, 'day');
    this.dashboardService.Chart_bar_load(filterInput).subscribe((response: any)=>{
      var year = moment(this.fromdate1).year();
      var month = moment(this.fromdate1).month() + 1;
      var monthto = moment(this.todate1).month() + 1;
      var yearto = moment(this.todate1).year();
      for (;month <=  monthto || year < yearto; month++) {
        this.chartLabels1?.push(month.toString() + '/' + year.toString())
        if(month == 12){
          month = 1;
          year = year + 1;
        }
        let res_data: BARCHART[];
        res_data = response;
        var dataTmp = res_data.filter(x => parseInt(x.month!)  == month && parseInt(x.year!)  == year);
        if(dataTmp.length > 0){
          this.dataChart1?.push(dataTmp[0].data!);
        }
      }
      this.chartData1 = [
        {
          data: this.dataChart1,
          label: 'Doanh thu'
        }
      ];
    });
  }
  chartLabels2?: string[] = [];
  public ChartType2 = 'bar';
  chartData2 = [
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
  chartOptions2 = {
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
  fromdate2?: string;
  todate2?: string;
  LoadChart2(){
    this.dataAcer = [];
    this.dataAsus = [];
    this.dataDell = [];
    this.dataHp = [];
    this.dataMsi = [];
    this.chartLabels2 = [];
    var filterInput = new CHART_BAR_FILTER();
    filterInput.froM_DATE = moment(this.fromdate2).add(1, 'day');
    filterInput.tO_DATE = moment(this.todate2).add(1, 'day');
    this.dashboardService.Chart_bar_load(filterInput).subscribe((response: any)=>{
      var year = moment(this.fromdate2).year();
      var month = moment(this.fromdate2).month() + 1;
      var monthto = moment(this.todate2).month() + 1;
      var yearto = moment(this.todate2).year();
      for (;month <=  monthto || year < yearto; month++) {
        this.chartLabels2?.push(month.toString() + '/' + year.toString())
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
      this.chartData2 = [
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
  listProduct?: PRODUCT[];
  page: number = 1;
  count: number = 0;
  tableSize: number = 5;
  tableSizes: any = [3, 6, 9, 12];
  filterInput1: PRODUCT  = new PRODUCT();
  totaltable1?: number;
  onTableDataChange(event: any) {
    this.page = event;
  }
  onTableSizeChange(): void {
    this.tableSize = this.filterInput1.top!;
    this.page = 1;
  }
  loadProduct1(){
    this.listProduct = []
    this.productService.Product_search(this.filterInput1).subscribe((response: any)=>{
      this.listProduct = response;
      this.totaltable1 = this.listProduct!.length;
    });
  }
  formatCurrency(num: any)
  {
    let sign: any;
    let cents: any;
    num = num.toString().replace(/\$|\,/g, '');
    if (isNaN(num))
    {
        num = "0";
    }

    sign = (num == (num = Math.abs(num)));
    num = Math.floor(num * 100 + 0.50000000001);
    cents = num % 100;
    num = Math.floor(num / 100).toString();

    if (cents < 10)
    {
        cents = "0" + cents;
    }
    for (var i = 0; i < Math.floor((num.length - (1 + i)) / 3); i++)
    {
        num = num.substring(0, num.length - (4 * i + 3)) + ',' + num.substring(num.length - (4 * i + 3));
    }

    return (((sign) ? '' : '-') + num + 'đ');
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
