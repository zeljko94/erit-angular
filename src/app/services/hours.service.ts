import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hours } from 'src/app/models/hours.interface';

@Injectable({
  providedIn: 'root'
})
export class HoursService {

  private dataUrl = 'assets/data/hours.json';

  constructor(private http: HttpClient) { }

  getHoursData(): Observable<Hours[]> {
    return this.http.get<Hours[]>(this.dataUrl);
  }
}
