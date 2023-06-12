import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';


import { DataItem } from '../Interface/DataItem';
import { CharacterData } from '../Interface/character-data';

@Injectable({
  providedIn: 'root' 
})
export class ApiServiceService {

  // starwarsURL = 'https://swapi.dev/api/people/';

  // constructor(private http: HttpClient) { }

  // getData(){
    
  //   return this.http.get<any>(this.starwarsURL).pipe(map(x => Object.values(x.results)))
  // }

  // getDataByIndex(datatype: string, input: number): Observable<any>{
  //   return this.http.get<any>(`https://swapi.dev/api/${datatype}/${input}`)
  //   .pipe(
  //     tap(console.log),
  //     map(data => Object.values(data))
  //   );
  //   }

  // getDataByName(datatype: string, name: string): Observable<any>{
  //   return this.http.get<any>(`https://swapi.dev/api/${datatype}/?search=${name}`)
  //   .pipe(
  //     tap(console.log),
  //     map(data => console.log(data.results))
  //   );
  //   }

  constructor(private http: HttpClient) { }

  getPeeps(): Observable<DataItem[]> {
    return this.getAllData('https://swapi.dev/api/people/');
  }

  getPlanets(): Observable<DataItem[]> {
    return this.getAllData('https://swapi.dev/api/planets/');
  }

  getShips(): Observable<DataItem[]> {
    return this.getAllData('https://swapi.dev/api/starships/');
  }

  getDialogInfo(): Observable<DataItem[]>{
    return this.getDialog('https://swapi.dev/api/planets/1')
  }

  private getAllData(url: string): Observable<DataItem[]> {
    return this.http.get<{ results: any[], next: string }>(url).pipe(
      switchMap(({ results, next }) => {
        const items = results.map((result: any) => ({
          name: result.name,
          DOB: result.birth_year,
          gender: result.gender,
          climate: result.climate,
          population: result.population,
          model: result.model,
          manufacturer: result.manufacturer,
          url: result.url
        } as DataItem));

        if (next) {
          return this.getAllData(next).pipe(
            map((nextItems: DataItem[]) => [...items, ...nextItems])
          );
        } else {
          return of(items);
        }
      }),
      catchError(() => of([]))
    );
  }

  getDialog(url:string): Observable<any> {
    return this.http
      .get<any>(url)
      .pipe(map((data) => Object.values(data)));
  }
}
