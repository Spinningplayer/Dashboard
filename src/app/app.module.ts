import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import {Routes, RouterModule} from '@angular/router';
import { ServersComponent } from './body-container/servers/servers.component';
import { DashboardComponent } from './body-container/dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { BodyContainerComponent } from './body-container/body-container.component';

const appRoutes: Routes = [
  {path: 'servers', component: ServersComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: '', component: DashboardComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ServersComponent,
    DashboardComponent,
    HeaderComponent,
    BodyContainerComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
