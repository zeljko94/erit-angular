import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { WarningsComponent } from './components/warnings/warnings.component';
import { RosterComponent } from './components/roster/roster.component';
import { MessagesComponent } from './components/messages/messages.component';
import { HoursComponent } from './components/hours/hours.component';
import { DocumentsComponent } from './components/documents/documents.component';
import { RatingsComponent } from './components/ratings/ratings.component';
import { TrainingComponent } from './components/training/training.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },  // Redirect to dashboard by default
  { path: 'dashboard', component: DashboardComponent },
  { path: 'documents', component: DocumentsComponent },
  { path: 'roster', component: RosterComponent },
  { path: 'messages', component: MessagesComponent },
  { path: 'hours', component: HoursComponent },
  { path: 'ratings', component: RatingsComponent },
  { path: 'training', component: TrainingComponent },
  { path: 'warnings', component: WarningsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
