import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Car } from './model/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(public http: HttpClient) { }

  getAllCars(){
    //return [new Car('Suzuki', 'Swift'),
    //         new Car('Ford', 'Figo')];
    return this.http.get('http://localhost:3000/cars');
  }
}
