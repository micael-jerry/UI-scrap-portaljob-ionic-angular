import { Component } from '@angular/core';
import {ApiService} from "../api.service";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public page: any;
  public jobsData: any;
  constructor(public api: ApiService) {}

  search(){
    this.api.getJobs(this.page).subscribe(result => {
      this.jobsData= result;
    });
  }
}
