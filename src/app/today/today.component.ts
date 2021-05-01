import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})
export class TodayComponent implements OnInit {
  today: number = Date.now();
  hududlar: any;
  hududlar_org: any;
  keyword: any;
  constructor(private httpClient: HttpClient) { }


  ngOnInit(): void {
    this.httpClient
      .get('https://ramadan.uz/api/v2/regions')
      .subscribe((data) => {
        this.hududlar = data;
        this.hududlar_org = data;
      });
  }
  onRegionFilter() {
    this.hududlar = this.hududlar_org.filter(
      (statistics: any) => {
        return statistics.hudud.toLowerCase().includes(this.keyword.toLowerCase());
      }
    )
  }


}