import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { StarsComponent } from './stars/stars.component';
import { HeartsComponent } from './hearts/hearts.component';
import { SortedComponent } from './sorted/sorted.component';
import { MovieComponent } from './movie/movie.component';
import { ListComponent } from './list/list.component';
import { RouterModule, Routes } from '@angular/router';
import { StartComponent } from './start/start.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';

const routes: Routes = [
  { path: 'sorted', component: SortedComponent },
  { path: 'rate', component: ListComponent },
  { path: '', redirectTo: 'sorted', pathMatch: 'full' }
]



@NgModule({
  declarations: [
    AppComponent,
    StarsComponent,
    HeartsComponent,
    SortedComponent,
    MovieComponent,
    ListComponent,
    StartComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
