import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-hududlar',
  templateUrl: './hududlar.component.html',
  styleUrls: ['./hududlar.component.css'],
})
export class HududlarComponent implements OnInit {
  hududlar: any;
  hududlar_org:any;
  keyword:any;
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
      (statistics:any) => {
        return statistics.hudud.toLowerCase().includes(this.keyword.toLowerCase());
      }
    )
  }
}
