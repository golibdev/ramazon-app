import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-hudud",
  templateUrl: "./hudud.component.html",
  styleUrls: ["./hudud.component.css"],
})
export class HududComponent implements OnInit {
  data: any;
  region_name: any;

  constructor(private route: ActivatedRoute, private httpClient: HttpClient) {
    const region_id = this.route.snapshot.params.code;
    this.httpClient
      .get("https://ramadan.uz/api/v2/regions/" + region_id + "/dates")
      .subscribe((result) => {
        this.data = result;
      });

    this.httpClient
      .get("https://ramadan.uz/api/v2/regions/" + region_id)
      .subscribe((resp) => {
        this.region_name = resp;
      });

  }

  ngOnInit(): void { }
}
