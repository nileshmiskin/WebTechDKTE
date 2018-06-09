import { Component, OnInit } from '@angular/core';
import { Car } from '../model/car';
import { CarService } from '../car.service';
//import { Observable } from 'rxjs';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  cars: Array<Car>;
  selectedCar: Car;
  constructor(public service: CarService) { }

  ngOnInit() {
    //this.cars = [new Car('Suzuki', 'Swift'),
    //        new Car('Ford', 'Figo')];
    this.service.getAllCars().subscribe(
      data => this.cars = (data as Array<Car>)
    );
  }

  selectCar(car: Car){
    console.log('Selected car '+car);
    this.selectedCar = car;
  }

  addCar(make: string, model: string){
    console.log('Make '+make);
    this.cars.push(new Car(make, model));
  }
}
