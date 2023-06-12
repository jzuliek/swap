import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CardComponent } from './Components/card/card.component';
import { MatTableModule} from '@angular/material/table';
import { TableComponent } from './Components/table/table.component';
import { ShipsComponent } from './Components/ships/ships.component';
import { TabsComponent } from './Components/tabs/tabs.component';
import { MatTabsModule} from '@angular/material/tabs';
import { PlanetsComponent } from './Components/planets/planets.component';
import { CharactersComponent } from './Components/characters/characters.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { DialogboxComponent } from './Components/dialogbox/dialogbox.component';
import { MatDialogModule } from '@angular/material/dialog';
 

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    ShipsComponent,
    TabsComponent,
    PlanetsComponent,
    CharactersComponent,
    DialogboxComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSlideToggleModule,
    CardComponent,
    MatTableModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
