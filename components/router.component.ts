import {Routes} from "@angular/router";
import {HomeComponent} from "./home.component";
import {QqComponent} from "./qq.component";
import {QiuJiComponent} from "./qiu-ji.component";
export const myRouter:Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "qq",
    component: QqComponent
  },
  {
    path: "qiuji",
    component: QiuJiComponent
  },
  {
    path: "**",
    redirectTo: "home"
  }
];
