import {Component, ViewChild} from '@angular/core';
import {ApiService} from '../api.service';
import { IonModal } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild(IonModal) modal: IonModal;
  public page: any = 1;
  public jobsData: any;

  constructor(public api: ApiService) {
    this.api.getJobs(this.page).subscribe(result => {
      this.jobsData = result;
    });
  }

  cancel() {
    this.modal.dismiss(null, 'cancel');
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
