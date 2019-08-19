import { Component, OnInit, Input } from '@angular/core';
import { Ticket } from './../ticket';

import { Router, ActivatedRoute } from '@angular/router';
import { TicketService } from '../ticket.service';
//import { TicketListComponent } from '../ticket-list/ticket-list.component';

@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.component.html',
  styleUrls: ['./ticket-details.component.css']
})
export class TicketDetailsComponent implements OnInit {

 // @Input() ticket: Ticket;

  id: number;
  ticket: any;

  constructor(private route: ActivatedRoute,private router: Router,
    private ticketService: TicketService) { }
//private ticketService: TicketService, private listComponent: TicketListComponent
  ngOnInit() {

    this.ticket = new Ticket();

    this.id = this.route.snapshot.params['id'];
    
    this.ticketService.getTicket(this.id)
      .subscribe(data => {
        console.log(data)
      this.ticket = data;
      }, error => console.log(error));

     
  }

  list(){
    this.router.navigate(['tickets']);
  }


}
