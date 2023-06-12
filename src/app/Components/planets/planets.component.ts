import { Component, OnInit } from '@angular/core';
import { DataItem } from 'src/app/Interface/DataItem';
import { ApiServiceService } from 'src/app/Services/api-service.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {
  
  planetData: DataItem[] = [];
  
  displayedColumns: string[] = ['name', 'climate', 'population'];

  constructor(private dataService: ApiServiceService) { }

  ngOnInit(): void {
    this.dataService.getPlanets().subscribe(data => {
      this.planetData = data;
    });
  }
}

