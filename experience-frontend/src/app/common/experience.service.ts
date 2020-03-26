import { Injectable } from '@angular/core';
import { HttpClient, HttpBackend } from '@angular/common/http';
import { User } from './models/models';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  private unsecuredHttpClient: HttpClient;

  constructor(private securedHttpClient: HttpClient,
              private httpBackend: HttpBackend) { 
      this.unsecuredHttpClient = new HttpClient(this.httpBackend);
  }

  registerUser(user: User) {
    return this.unsecuredHttpClient.post(`${environment.backendURL}/register`, user);
  }
}
