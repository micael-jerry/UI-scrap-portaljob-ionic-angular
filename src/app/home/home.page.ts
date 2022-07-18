import {Component} from '@angular/core';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public page: any = 1;
  public jobsData: any;

  constructor(public api: ApiService) {
    this.api.getJobs(this.page).subscribe(result => {
      this.jobsData = result;
    });
  }

  next() {
    this.api.getJobs(this.page + 1).subscribe(result => {
      this.jobsData = result;
      this.page += 1;
    });
  }

  previous() {
    if (this.page - 1 > 0) {
      this.api.getJobs(this.page - 1).subscribe(result => {
        this.jobsData = result;
        this.page -= 1;
      });
    }
  }
}
