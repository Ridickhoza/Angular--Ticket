import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  private baseUrl = '/api/v1/tickets';

  constructor(private http: HttpClient) { }
  
    getTicket(id: number): Observable<Object> {
      return this.http.get(`${this.baseUrl}/${id}`);
    }
  
    createTicket(ticket: Object): Observable<Object> {
      return this.http.post(`${this.baseUrl}`, ticket);
    }

    getTickts(ticket: Object,id:number): Observable<Object> {
      return this.http.get(`${this.baseUrl}/${id}`, ticket);
    }
  
    updateTick(id: number, value: any): Observable<Object> {
      return this.http.put(`${this.baseUrl}/${id}`, value);
    }

    updateTicket(id: number, value:any): Observable<Object> {
      return this.http.put(`${this.baseUrl}/${id}`, value );
    }
  
    deleteTicket(id: number): Observable<any> {
      return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
    }
  
    getTicketList(): Observable<any> {
      return this.http.get(`${this.baseUrl}`);
    }
}
