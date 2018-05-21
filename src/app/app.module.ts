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
import { ServerStatisticsComponent } from './body-container/dashboard/server-statistics/server-statistics.component';
import {ServerService} from './body-container/servers/server.service';
import { StatsItemComponent } from './body-container/dashboard/server-statistics/stats-item/stats-item.component';
import { MenuDirective } from './menu.directive';
import { LedstripControllerComponent } from './body-container/dashboard/ledstrip-controller/ledstrip-controller.component';
import { OutletsComponent } from './body-container/outlets/outlets.component';
import { OutletListComponent } from './body-container/dashboard/outlet-list/outlet-list.component';
import { OutletItemComponent } from './body-container/dashboard/outlet-list/outlet-item/outlet-item.component';
import { ListComponent } from './body-container/outlets/list/list.component';
import { FormComponent } from './body-container/outlets/form/form.component';
import { ListItemComponent } from './body-container/outlets/list/list-item/list-item.component';
import {OutletsService} from './services/outlets.service';
import { RoutinesComponent } from './body-container/routines/routines.component';
import { RoutineListComponent } from './body-container/routines/routine-list/routine-list.component';
import { RoutineEditComponent } from './body-container/routines/routine-edit/routine-edit.component';
import { TaskListComponent } from './body-container/routines/routine-edit/task-list/task-list.component';
import { TaskEditItemComponent } from './body-container/routines/routine-edit/task-list/task-edit-item/task-edit-item.component';
import { RoutineEditFormComponent } from './body-container/routines/routine-edit/routine-edit-form/routine-edit-form.component';
import { RoutineListItemComponent } from './body-container/routines/routine-list/routine-list-item/routine-list-item.component';

const appRoutes: Routes = [
  {path: 'servers', component: ServersComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'ledstrips', component: LedstripsComponent},
  {path: 'outlets', component: OutletsComponent},
  {path: 'routines', component: RoutinesComponent},
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
    LedstripItemComponent,
    ServerStatisticsComponent,
    StatsItemComponent,
    MenuDirective,
    LedstripControllerComponent,
    OutletsComponent,
    OutletListComponent,
    OutletItemComponent,
    ListComponent,
    FormComponent,
    ListItemComponent,
    RoutinesComponent,
    RoutineListComponent,
    RoutineEditComponent,
    TaskListComponent,
    TaskEditItemComponent,
    RoutineEditFormComponent,
    RoutineListItemComponent
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
  providers: [ControllerService, ServerService, OutletsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
