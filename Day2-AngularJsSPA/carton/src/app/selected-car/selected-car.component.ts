import { Component, OnInit, Input } from '@angular/core';
import { Car } from '../model/car';

@Component({
  selector: 'app-selected-car',
  templateUrl: './selected-car.component.html',
  styleUrls: ['./selected-car.component.css']
})
export class SelectedCarComponent implements OnInit {
  @Input() car: Car;
  constructor() { }

  ngOnInit() {
  }

}
