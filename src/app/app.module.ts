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
import {LedstripsComponent} from './body-container/ledstrips/ledstrips.component';
import {ControllerFormComponent} from './body-container/ledstrips/controller-form/controller-form.component';
import {LedstripFormComponent} from './body-container/ledstrips/ledstrip-form/ledstrip-form.component';
import {ControllerListComponent} from './body-container/ledstrips/controller-list/controller-list.component';
import {LedstripListComponent} from './body-container/ledstrips/ledstrip-list/ledstrip-list.component';
import {ControllerItemComponent} from './body-container/ledstrips/controller-list/controller-item/controller-item.component';
import {LedstripItemComponent} from './body-container/ledstrips/ledstrip-list/ledstrip-item/ledstrip-item.component';
import {ControllerService} from './body-container/ledstrips/controller.service';
import {LedstripService} from './body-container/ledstrips/ledstrip.service';

const appRoutes: Routes = [
  {path: 'servers', component: ServersComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'ledstrips', component: LedstripsComponent},
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
    EditServerComponent,
    LedstripsComponent,
    ControllerFormComponent,
    LedstripFormComponent,
    ControllerListComponent,
    LedstripListComponent,
    ControllerItemComponent,
    LedstripItemComponent
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
  providers: [ControllerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
