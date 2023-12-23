import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './admin/shared/navbar/navbar.component';
import { SidebarComponent } from './admin/shared/sidebar/sidebar.component';
import { DashbordComponent } from './admin/pages/dashbord/dashbord.component';

import { NotificationComponent } from './admin/pages/notification/notification.component';
import { ProfilComponent } from './admin/shared/profil/profil.component';
import { LoginComponent } from './admin/pages/login/login.component';
import { HomeComponent } from './home/home.component'
import { agriculteursComponent } from './admin/pages/agriculteurs/agriculteurs.component';
import { MapsComponent } from './admin/pages/maps/maps.component';
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component:  HomeComponent},
  { path: 'navbarComponent', component: NavbarComponent },
  { path: 'sidebarComponent', component: SidebarComponent },
  { path: 'dashbord', component: DashbordComponent },
  { path: 'agriculteur',component: agriculteursComponent },
  { path: 'notification', component: NotificationComponent },
  { path: 'profil', component: ProfilComponent },
  { path: 'map', component: MapsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
