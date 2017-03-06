import {Component, OnInit} from "@angular/core";
import {URLSearchParams} from "@angular/http";
import {HttpService} from "../services/http.service";
@Component({
  selector: "pri-search",
  templateUrl: "../templates/search.component.html"
})
export class SearchComponent implements OnInit {
  videos:Array<string>;
  news:Array<string>;
  players:Array<string>;

  constructor(public _httpService:HttpService) {
    this.videos = [];
    this.news = [];
    this.players = [];
  }

  ngOnInit() {
    
  }

}
