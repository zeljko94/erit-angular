import { Injectable } from '@angular/core';
import { Warning } from '../models/warning.interface';

@Injectable({
  providedIn: 'root'
})
export class WarningService {

  private warnings = [
    { "icon": "check_circle", "status": "accent", "date": "24.09.2024.", "message": "Minimum rest time" },
    { "icon": "error", "status": "alert", "date": "23.09.2024.", "message": "Minimum hours" },
    { "icon": "error", "status": "alert", "date": "19.09.2024.", "message": "Check time" },
    { "icon": "check_circle", "status": "accent", "date": "17.09.2024.", "message": "Check time" }
];

  constructor() {}

  getWarnings(): Warning[] {
    return this.warnings;
  }
}
