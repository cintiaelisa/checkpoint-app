import { Poi } from './../poi.model';
import { Component, OnInit } from '@angular/core';
import { PoiService } from '../poi.service';

@Component({
  selector: 'app-poi-read',
  templateUrl: './poi-read.component.html',
  styleUrls: ['./poi-read.component.css']
})
export class PoiReadComponent implements OnInit {

  pois: Poi[];
  displayedColumns = ['nome', 'raio', 'latitude', 'longitude'];

  constructor(private poiService: PoiService) { }

  ngOnInit(): void {

    this.poiService.read().subscribe(pois => {
      this.pois = pois
      console.log(pois);
    })
    
  }

}
