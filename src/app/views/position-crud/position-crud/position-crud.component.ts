import { Component, OnInit } from '@angular/core';

interface Food {
  value: string;
  viewValue: string;
}

interface Car {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-position-crud',
  templateUrl: './position-crud.component.html',
  styleUrls: ['./position-crud.component.css']
})
export class PositionCrudComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  selectedValue: string;
  selectedCar: string;

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

}
