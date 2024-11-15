import { Injectable } from '@angular/core';
import { Hours } from 'src/app/models/hours.interface';

@Injectable({
  providedIn: 'root'
})
export class HoursService {

  private hours = [
    {
      "licenseUnit": "ACS_LDZO",
      "role": "ACC",
      "lastWork": "14.09.2024.",
      "period": "02.09. - 01.12.",
      "hours": "27:32"
    },
    {
      "licenseUnit": "ACS_LDZO",
      "role": "TMA_ZAG",
      "lastWork": "17.09.2024.",
      "period": "05.03. - 04.07.",
      "hours": "15:32"
    },
    {
      "licenseUnit": "ACS_LDZO",
      "role": "TMA_ZAG",
      "lastWork": "17.09.2024.",
      "period": "05.03. - 04.07.",
      "hours": "15:32"
    }
  ];

  constructor() { }

  getHoursData(): Hours[] {
    return this.hours;
  }
}
