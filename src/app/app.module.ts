import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import {Routes, RouterModule} from '@angular/router';
import { ServersComponent } from './body-container/servers/servers.component';
import { DashboardComponent } from './body-container/dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { BodyContainerComponent } from './body-container/body-container.component';
import {Http, HttpModule} from '@angular/http';
import { ServerListComponent } from './body-container/servers/server-list/server-list.component';
import { ServerItemComponent } from './body-container/servers/server-list/server-item/server-item.component';
import { EditServerComponent } from './body-container/servers/edit-server/edit-server.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

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
    BodyContainerComponent,
    ServerListComponent,
    ServerItemComponent,
    EditServerComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
