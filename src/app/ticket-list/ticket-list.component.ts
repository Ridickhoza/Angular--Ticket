import { Component, OnInit } from '@angular/core';
//import { TicketDetailsComponent } from './../ticket-details/ticket-details.component';
import { Observable } from "rxjs";
import { TicketService } from "./../ticket.service";
import { Ticket } from "./../ticket";
import { Router } from '@angular/router';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {
  tickets: Observable<Ticket[]>;
  
  ticket: Ticket = new Ticket();
  constructor(private ticketService: TicketService,private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.tickets = this.ticketService.getTicketList();
  }

  

  

  deleteTicket(id: number) {
    this.ticketService.deleteTicket(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }


  ticketDetails(id: number){
    this.router.navigate(['/detail',id]);
  }


  checkUpdate(id:number){
      
    
    
        this.router.navigate(['update']);
        console.log(this.ticket.id);
      
    
  }
}
