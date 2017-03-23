import { Component, OnInit, Input } from '@angular/core';

/*
  Generated class for the DataGauge component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'data-gauge',
  templateUrl: 'data-gauge.html'
})

export class DataGaugeComponent {
  x: number;
  y: number;
  r: number;
  r_outter: number;
  r_inner: number;
  outterRingWidth: any;
  ctx: CanvasRenderingContext2D;
  gauge: HTMLCanvasElement;

  constructor() {
    console.log('Hello DataGauge Component');
  }

  ngOnInit() {
    console.log("Ng On Init");
  }

  init(gauge: HTMLCanvasElement, style: Style) {
    this.gauge = gauge;
    
    this.x = 0.5 * this.gauge.width;
    this.y = 0.5 *this.gauge.height;
    this.r = this.x >= this.y ? this.y : this.x
    this.r_outter = this.r - 20;
    this.r_inner = this.r_outter - 10;
    this.outterRingWidth = 6;

    this.drawGauge(style.value, style.unit, style.title, style.innerCicleColor);
  }

  drawGauge(text: string, unit: string, title: string, innerCicleColor: string) {

    this.ctx = this.gauge.getContext("2d");

    console.log("x=" + this.x + "   y=" + this.y + "  r=" + this.r);

    this.ctx.beginPath();
    this.ctx.strokeStyle = "#e7e5ec";
    this.ctx.arc(this.x, this.y, this.r_outter, 0.3 * Math.PI, 0.7 * Math.PI, true);
    this.ctx.lineWidth = this.outterRingWidth;
    this.ctx.stroke();


    this.ctx.fillStyle = innerCicleColor;
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.r_inner, 0, 2 * Math.PI);
    this.ctx.closePath();
    this.ctx.fill();

    this.ctx.font = this.r_inner * 0.4 + "px Arial";
    this.ctx.textAlign = "center";
    this.ctx.fillStyle = "#68476e";
    this.ctx.fillText(text, this.x, this.y + 0.1 * this.y);

    this.ctx.font = this.r_inner * 0.2 + "px Arial";
    this.ctx.fillText(unit, this.x, this.y + 0.3 * this.y);

    this.ctx.fillText(title, this.x, this.r + this.r_outter + this.outterRingWidth)

    this.drawScale("#679481", 70);
    this.drawScale("#f8a3b8", 40);
    this.drawIndicator("#d88a28", 80);
  }

  drawScale(color: string, angle: number) {
    this.ctx.beginPath();
    this.ctx.strokeStyle = color;
    this.ctx.moveTo(this.x + (this.r_outter - 0.5 * this.outterRingWidth) * Math.sin(angle * 2 * Math.PI / 180), this.y + (this.r_outter - 0.5 * this.outterRingWidth) * Math.cos(angle * 2 * Math.PI / 180));
    this.ctx.lineTo(this.x + (this.r_outter + 0.5 * this.outterRingWidth) * Math.sin(angle * 2 * Math.PI / 180), this.y + (this.r_outter + 0.5 * this.outterRingWidth) * Math.cos(angle * 2 * Math.PI / 180));
    this.ctx.closePath();
    this.ctx.stroke();
  }

  drawIndicator(color: string, angle: number) {
    this.ctx.beginPath();
    this.ctx.strokeStyle = color;
    this.ctx.moveTo(this.x + this.r_inner * Math.sin(80 * 2 * Math.PI / 180), this.y + this.r_inner * Math.cos(80 * 2 * Math.PI / 180));
    this.ctx.lineTo(this.x + (this.r_outter + this.outterRingWidth) * Math.sin(80 * 2 * Math.PI / 180), this.y + (this.r_outter + this.outterRingWidth) * Math.cos(80 * 2 * Math.PI / 180));
    this.ctx.closePath();
    this.ctx.stroke();
  }

}

export interface Style {
  title: string;
  value: string;
  unit: string;
  innerCicleColor: string;
}
