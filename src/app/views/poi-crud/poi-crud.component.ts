import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-poi-crud.component',
  templateUrl: './poi-crud.component.html',
  styleUrls: ['./poi-crud.component.css']
})
export class PoiCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
