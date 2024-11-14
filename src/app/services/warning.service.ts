import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Warning } from '../models/warning.interface';

@Injectable({
  providedIn: 'root'
})
export class WarningService {

  private apiUrl = 'assets/data/warnings.json';

  constructor(private http: HttpClient) {}

  getWarnings(): Observable<Warning[]> {
    return this.http.get<Warning[]>(this.apiUrl);
  }
}
