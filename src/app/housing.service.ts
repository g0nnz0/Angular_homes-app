import { Injectable } from '@angular/core';
import { IHousingLocation } from './ihousing-location';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  protected housingLocationList: IHousingLocation[] = [];
  constructor() { }

  getAllHousingLocations(): IHousingLocation[]{
    return this.housingLocationList;
  }

  getHousingLocationById(id: number): IHousingLocation | undefined{
    //En esta linea creo que por inferencia TS entiende que el parametro 'housingLocation' en la arrow function es de tipo IHousingLocation porque lo estoy buscando dentro de una lista que es de tipo IHousingLocation
    //Este es un buen ejemplo de que cuando una arrowFunction tiene un solo parametro no lleva parentesis.
    return this.housingLocationList.find(housingLocation => housingLocation.id === id);
  }

  submitApplication(firstName: string, lastName: string, email: string){
    console.log(firstName, lastName, email);
  }
}
