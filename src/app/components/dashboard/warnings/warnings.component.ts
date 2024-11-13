import { Component } from '@angular/core';
import { WarningService } from '../../../services/warning.service';

@Component({
  selector: 'app-warnings',
  templateUrl: './warnings.component.html',
  styleUrls: ['./warnings.component.scss']
})
export class WarningsComponent {
  warnings = this.warningService.getWarnings();

  constructor(private warningService: WarningService) {}
}