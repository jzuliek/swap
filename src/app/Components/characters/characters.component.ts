import { Component, OnInit } from '@angular/core';
import { DataItem } from 'src/app/Interface/DataItem';
import { ApiServiceService } from 'src/app/Services/api-service.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  charData: DataItem[] = [];
  
  displayedColumns: string[] = ['name', 'DOB', 'gender' ];

  constructor(private dataService: ApiServiceService) { }

  ngOnInit(): void {
    this.dataService.getPeeps().subscribe(data => {
      this.charData = data;
      //console.log(this.charData)
    });
  }
}
