import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Roster } from '../models/roster.interface';

@Injectable({
  providedIn: 'root'
})
export class RosterService {
  private readonly dataUrl = 'assets/data/roster.json';

  constructor(private http: HttpClient) { }

  getRoster(): Observable<Roster[]> {
    return this.http.get<Roster[]>(this.dataUrl);
  }
}
