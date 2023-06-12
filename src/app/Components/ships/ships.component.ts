import { Component, OnInit } from '@angular/core';
import { DataItem } from 'src/app/Interface/DataItem';
import { ApiServiceService } from 'src/app/Services/api-service.service';

@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.css']
})
export class ShipsComponent implements OnInit {
  
  starshipsData: DataItem[] = [];

  displayedColumns: string[] = ['name', 'model', 'manufacturer'];

  constructor(private dataService: ApiServiceService) { }

  ngOnInit(): void {
    this.dataService.getShips().subscribe(data => {
      this.starshipsData = data;
    });
  }
}
