import { Component, Input, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ApiServiceService } from './Services/api-service.service';
import { map } from 'rxjs/operators'
import { DataItem } from './Interface/DataItem';
import {NgFor} from '@angular/common';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiServiceService],
})
export class AppComponent implements OnInit{
  title = 'star-wars';

  peopleArr: DataItem[] = [];

  constructor(private apiData: ApiServiceService){
    // console.log(apiData.getDataByName('people', 'luke'))
    // apiData.getData().subscribe(x =>{console.log(x)})
  }

  ngOnInit(): void {


      // this.apiData.fetchPlanetsData().subscribe(x => {
      //   console.log(x)
      // })
      // this.apiData.fetchStarshipsData().subscribe(x => {
      //   console.log(x);
      // })
  }

  // searchByIndex(field: string, index: number) {
  //   console.log('Pressed');
  //   this.apiData.getDataByIndex(field, index).subscribe((data) => {
  //     console.log(data);
  //   });
  // }

  // searchByName(field: string, name: string) {
  //   console.log('Pressed');
  //   this.apiData.getDataByName(field, name).subscribe((data) => {
  //     console.log(data);
  //   });
  // }


}
