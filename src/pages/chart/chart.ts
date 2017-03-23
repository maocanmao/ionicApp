import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import Chart from 'chart.js'
import { NewsPage } from '../news/news'
import { DataGaugeComponent } from '../../components/data-gauge/data-gauge'


/*
  Generated class for the Chart page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-chart',
  templateUrl: 'chart.html'
})
export class ChartPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChartPage');

    var ctx = document.getElementById("myChart");
    var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });

    var ctx1 = <HTMLCanvasElement>document.getElementById("chart");
    var myGauge = new DataGaugeComponent();
    myGauge.init(ctx1 ,{
      title:"血糖",
      value:"6.25",
      unit:"mmol/L",
      innerCicleColor:"#d2b8db"
    });

  }

  drawGauge(text: string, unit: string, title: string) {
    var gauge: any = document.getElementById("gauge");
    let x = 0.5 * parseFloat(document.getElementById("gauge").getAttribute("width"));
    let y = 0.5 * parseFloat(document.getElementById("gauge").getAttribute("height"));
    let ctx: CanvasRenderingContext2D = gauge.getContext("2d");
    let r = x >= y ? y : x
    let r_outter = r - 20;
    let r_inner = r_outter - 10;
    let outterRingWidth = 6;
    console.log("x=" + x + "   y=" + y + "  r=" + r);

    ctx.beginPath();
    ctx.strokeStyle = "#e7e5ec";
    ctx.arc(x, y, r_outter, 0.3 * Math.PI, 0.7 * Math.PI, true);
    ctx.lineWidth = outterRingWidth;
    ctx.stroke();


    ctx.fillStyle = "#d2b8da";
    ctx.beginPath();
    ctx.arc(x, y, r_inner, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fill();

    ctx.font = r * 0.4 + "px Arial";
    ctx.textAlign = "center";
    ctx.fillStyle = "#68476e";
    ctx.fillText(text, x, y + 0.1 * y);

    ctx.font = r * 0.2 + "px Arial";
    ctx.fillText(unit, x, y + 0.4 * y);

    ctx.fillText(title, x, 2 * r - 5)

    //draw scale
    ctx.beginPath();
    ctx.strokeStyle = "#679481";
    ctx.moveTo(x + (r_outter - 0.5 * outterRingWidth) * Math.sin(70 * 2 * Math.PI / 180), y + (r_outter - 0.5 * outterRingWidth) * Math.cos(70 * 2 * Math.PI / 180));
    ctx.lineTo(x + (r_outter + 0.5 * outterRingWidth) * Math.sin(70 * 2 * Math.PI / 180), y + (r_outter + 0.5 * outterRingWidth) * Math.cos(70 * 2 * Math.PI / 180));
    ctx.closePath();
    ctx.stroke();

    //draw scale
    ctx.beginPath();
    ctx.strokeStyle = "#f8a3b8";
    ctx.moveTo(x + (r_outter - 0.5 * outterRingWidth) * Math.sin(40 * 2 * Math.PI / 180), y + (r_outter - 0.5 * outterRingWidth) * Math.cos(40 * 2 * Math.PI / 180));
    ctx.lineTo(x + (r_outter + 0.5 * outterRingWidth) * Math.sin(40 * 2 * Math.PI / 180), y + (r_outter + 0.5 * outterRingWidth) * Math.cos(40 * 2 * Math.PI / 180));
    ctx.closePath();
    ctx.stroke();

    //draw scale
    ctx.beginPath();
    ctx.strokeStyle = "#d88a28";
    ctx.moveTo(x + r_inner * Math.sin(80 * 2 * Math.PI / 180), y + r_inner * Math.cos(80 * 2 * Math.PI / 180));
    ctx.lineTo(x + (r_outter + outterRingWidth) * Math.sin(80 * 2 * Math.PI / 180), y + (r_outter + outterRingWidth) * Math.cos(80 * 2 * Math.PI / 180));
    ctx.closePath();
    ctx.stroke();

  }
}
