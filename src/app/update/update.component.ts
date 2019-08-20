import { Component, OnInit,Input } from '@angular/core';
import { Ticket } from '../ticket';
import { TicketService } from '../ticket.service';
import { TicketListComponent } from '../ticket-list/ticket-list.component';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  
 // ticket: Ticket = new Ticket();
 tickets: TicketListComponent;
  

 id: number;
 ticket: any;
  constructor(private route: ActivatedRoute,private ticketService: TicketService,private router:Router ) { 
  }

  ngOnInit() {

    this.ticket = new Ticket();

    this.id = this.route.snapshot.params['id'];
    
    this.ticketService.getTicket(this.id)
      .subscribe(data => {
        console.log(data)
      this.ticket = data;
      }, error => console.log(error));
  }


updateTicket(id: number,ticket:object){
  id = this.tickets.ticket.id;
  ticket =this.tickets.ticket;
  this.ticketService.updateTicket(id,ticket)
  .subscribe(data => console.log(data), error => console.log(error));
  
}

list(){
  this.router.navigate(['tickets']);
}

}
