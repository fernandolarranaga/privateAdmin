import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlazonsService {
  private apiUrl = 'http://localhost:3001/heraldry';

  constructor(public http:HttpClient) { }

  getBlazons(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getBlason(blasonId: string): Observable<any> {
    const url = `${this.apiUrl}/${blasonId}`;
    return this.http.get(url);
  }

  createBlason(blasonData: any): Observable<any> {
    return this.http.post(this.apiUrl, blasonData);
  }

  updateBlason(blasonId: string, blasonData: any): Observable<any> {
    const url = `${this.apiUrl}/${blasonId}`;
    return this.http.put(url, blasonData);
  }

  deleteBlason(blasonId: string): Observable<any> {
    const url = `${this.apiUrl}/${blasonId}`;
    return this.http.delete(url);
  }

  
}