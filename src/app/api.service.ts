import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(public http: HttpClient) {}

  getJobs(page) {
    return this.http.get('http://localhost:5000/api-portaljob?page=' + page);
  }
}
