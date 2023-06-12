import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './Components/card/card.component';
import { PlanetsComponent } from './Components/planets/planets.component';
import { ShipsComponent } from './Components/ships/ships.component';
import { CharactersComponent } from './Components/characters/characters.component';

const routes: Routes = [
  {path: '', redirectTo: '/ships', pathMatch: 'full' },
  {path: 'ships', component: ShipsComponent},
  {path: 'planets', component: PlanetsComponent},
  {path: 'character', component: CharactersComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
