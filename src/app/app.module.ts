import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './admin/shared/navbar/navbar.component';
import { SidebarComponent } from './admin/shared/sidebar/sidebar.component';
import { DashbordComponent } from './admin/pages/dashbord/dashbord.component';
import { NotificationComponent } from './admin/pages/notification/notification.component';
import { ProfilComponent } from './admin/shared/profil/profil.component';
import { LoginComponent } from './admin/pages/login/login.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { agriculteursComponent } from './admin/pages/agriculteurs/agriculteurs.component';
import { SearchPipePipe } from './search-pipe.pipe';
import { NgxPaginationModule } from 'ngx-pagination';

import { ToastrModule } from 'ngx-toastr';
import { MapsComponent } from './admin/pages/maps/maps.component';
import { AgmCoreModule } from '@agm/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { CardComponent } from './card/card.component';
import { ChartModule } from '@syncfusion/ej2-angular-charts';
// import { GoogleMapsModule } from '@angular/google-maps'
import { CategoryService, ColumnSeriesService, LineSeriesService} from '@syncfusion/ej2-angular-charts';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    DashbordComponent,
    agriculteursComponent,
    NotificationComponent,
    ProfilComponent,
    LoginComponent,
    HomeComponent,

    SearchPipePipe,
    MapsComponent,
    NavComponent,
    CardComponent,
   


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    BrowserModule,
    ToastrModule.forRoot(),
    FormsModule,
    ChartModule ,

    
    // GoogleMapsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyADiM8Fxg6qgy2yef7CURfQ_bh2b4K5O2M',
      libraries: ['places', 'drawing', 'geometry']
    }),
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [CategoryService, ColumnSeriesService, LineSeriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
