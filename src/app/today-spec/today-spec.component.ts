import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-today-spec',
  templateUrl: './today-spec.component.html',
  styleUrls: ['./today-spec.component.css']
})
export class TodaySpecComponent implements OnInit {
  data: any;
  region_name: any;
  today: number = Date.now();

  constructor(private route: ActivatedRoute, private httpClient: HttpClient) {
    const region_id = this.route.snapshot.params.code;
    this.httpClient
      .get("https://ramadan.uz/api/v2/regions/" + region_id + "/dates/today")
      .subscribe((result) => {
        this.data = result;
      });

    this.httpClient
      .get("https://ramadan.uz/api/v2/regions/" + region_id)
      .subscribe((resp) => {
        this.region_name = resp;
      });

  }

  ngOnInit(): void {
  }

}
