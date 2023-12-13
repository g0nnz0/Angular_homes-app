import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { IHousingLocation } from '../ihousing-location';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  template: `
    <section>
      <form action="">
        <input type="text" placeholder="Filter by city" #filter>
        <button class="primary" type="button" (click)="filterResults(filter.value)">Search</button>
      </form>
    </section>

    <section class="results">
      <app-housing-location *ngFor="let housingLoc of filteredLocationList" [housingLocation]="housingLoc"></app-housing-location>
    </section>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {

  housingLocationList: IHousingLocation[] = [];
  housingService : HousingService = inject(HousingService);
  filteredLocationList: IHousingLocation[] = [];

  constructor(){
    this.housingService.getAllHousingLocations().then((housingLocationList: IHousingLocation[])=>{
      this.housingLocationList = housingLocationList;
      this.filteredLocationList = housingLocationList;
    });
  }

  filterResults(text: string) {
    if(!text) this.filteredLocationList = this.housingLocationList;
    
    this.filteredLocationList = this.housingLocationList.filter(
      housingLocation => housingLocation?.city.toLowerCase().includes(text.toLowerCase())
    );
  }
}
