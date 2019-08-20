import { TicketDetailsComponent } from './ticket-details/ticket-details.component';
import { CreateTicketComponent } from './create-ticket/create-ticket.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  { path: '', redirectTo: 'ticket', pathMatch: 'full' },
  { path: 'tickets', component: TicketListComponent },
  { path: 'add', component: CreateTicketComponent },
  { path: 'update/:id', component: UpdateComponent },
  { path: 'detail/:id', component:  TicketDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
