import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpBackend } from '@angular/common/http';
import { Product } from './common/models/models';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private http: HttpClient;
  constructor(private httpClient: HttpClient,
              private httpBackend: HttpBackend) { 
                this.http = new HttpClient(this.httpBackend);
              }

  getAllProducts() {
    const httpOptions = {
      /* headers: new HttpHeaders({
        'Authorization': 'MY SECRET VALUE'
      }) */
    };
    return this.httpClient.get<Product[]>(`${environment.BE_API_URL}/products`, httpOptions);
  }
}
