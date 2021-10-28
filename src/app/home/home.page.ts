import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  cercle: Cercle;
  perimetre: number;
  surface: number;
  constructor() {}
  CalculsCercle(r: number)
  {
    this.cercle = new Cercle(r);
    this.perimetre = this.cercle.perimetre();
    this.surface = this.cercle.surface();
  }

}
export class Cercle{
  private rayon: number;

  constructor(r: number)
  {
    this.rayon=r;
  }

  public perimetre(): number
  {
    return (Math.round((2* 3.1415 * this.rayon)*100)/100);
  }

  public surface(): number
  {
    return ((3.14 * (Math.round(Math.pow((this.rayon * 2),2))/4)*100)/100);
  }
}
