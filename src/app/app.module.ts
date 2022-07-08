import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule } from '@angular/router';
import {MatSliderModule} from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CreateAnnonceComponent } from './create-annonce/create-annonce.component';
import { SearchAnnonceComponent } from './search-annonce/search-annonce.component';
import { AuthentificationPageComponent } from './authentification-page/authentification-page.component';
import { AlerteAnnonceComponent } from './alerte-annonce/alerte-annonce.component';
import { HelpPageComponent } from './help-page/help-page.component';
import { NavigationBarreComponent } from './navigation-barre/navigation-barre.component';
import { SearchBoiteComponent } from './search-boite/search-boite.component';
import { SearchBoiteFormComponent } from './search-boite-form/search-boite-form.component';
import { TopCategorieComponent } from './top-categorie/top-categorie.component';
import { TopCategorieAnnonceComponent } from './top-categorie-annonce/top-categorie-annonce.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopAnnonceNextBouttonDirective } from './top-annonce-next-boutton.directive';
import { TopAnnoncePrevBouttonDirective } from './top-annonce-prev-boutton.directive';
import { CarteBurkinaHomeComponent } from './carte-burkina-home/carte-burkina-home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateAnnonceComponent,
    SearchAnnonceComponent,
    AuthentificationPageComponent,
    AlerteAnnonceComponent,
    HelpPageComponent,
    NavigationBarreComponent,
    SearchBoiteComponent,
    SearchBoiteFormComponent,
    TopCategorieComponent,
    TopCategorieAnnonceComponent,
    TopAnnonceNextBouttonDirective,
    TopAnnoncePrevBouttonDirective,
    CarteBurkinaHomeComponent
  ],
  imports: [
    BrowserModule,
    MatSliderModule,
    MatCardModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent },
      {path: 'create-annonce', component: CreateAnnonceComponent },
      {path: 'search-annonce', component : SearchAnnonceComponent},
      {path: 'authentification', component : AuthentificationPageComponent},
      {path: 'mes-alertes', component : AlerteAnnonceComponent},
      {path: 'aides', component : HelpPageComponent}
    ]),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
