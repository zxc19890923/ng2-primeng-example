import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {myRouter} from "./components/router.component";
// 载入primeng模块
import {
  AutoCompleteModule,
  TabViewModule,
  ButtonModule,
  PaginatorModule,
  CalendarModule,
  ChipsModule,
  MenubarModule,
  ToolbarModule,
  DialogModule,
  InputTextModule,
  PasswordModule,
  MenuItem
} from "primeng/primeng"

import {AppComponent} from './components/app.component';
import {HomeComponent} from "./components/home.component";
import {QqComponent} from "./components/qq.component";
import {QiuJiComponent} from "./components/qiu-ji.component";
import {HttpService} from "./services/http.service";
import {TopBarComponent} from "./components/topbar.component";
import {SearchComponent} from "./components/search.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QqComponent,
    QiuJiComponent,
    TopBarComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(myRouter),
    HttpModule,
    AutoCompleteModule,
    ButtonModule,
    TabViewModule,
    PaginatorModule,
    CalendarModule,
    ChipsModule,
    MenubarModule,
    ToolbarModule,
    DialogModule,
    InputTextModule,
    PasswordModule
  ],
  providers: [
    HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
