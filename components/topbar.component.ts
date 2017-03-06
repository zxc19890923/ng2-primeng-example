import {Component, OnInit} from "@angular/core";
@Component({
  selector: "pri-topbar",
  templateUrl: "../templates/topbar.component.html"
})
export class TopBarComponent implements OnInit {
  logined: boolean;
  constructor() {
    this.logined = false;
  }
  ngOnInit () {

  }
  showDialog() {
    this.logined = true;
  }
}
