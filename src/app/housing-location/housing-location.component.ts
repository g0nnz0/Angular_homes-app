import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IHousingLocation } from '../ihousing-location';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="listing">
      <!--Los [] en src significan que estamos usando Property Binding, el cual le dice a angular
      que lo que está entre comillas es una property de la class-->
      <!--{{property.value}} es Angular Interpolation syntax, nos permite mesclar values y expresiones dentro de strings-->
      <img class="listing-photo" [src]="housingLocation.photo" alt="Exterior photo of {{housingLocation.name}}">
      <h2 class="listing-heading">{{housingLocation.name}}</h2>
      <p class="listing-location">{{housingLocation.city}},{{housingLocation.state}}</p>
      <a [routerLink]="['/details', housingLocation.id]">Learn More</a>
    </section>
  `,
  styleUrl: './housing-location.component.css'
})
export class HousingLocationComponent {
  //Al agregarle @Input() a la property estamos diciendole que va a recibir valores desde un componente padre.
  //El "!" (Non Null Assertion) le dice al compilador que el valor no será null o undefined
  @Input() housingLocation!: IHousingLocation;
}
