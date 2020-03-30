import { Injectable } from '@angular/core';
import { HttpClient, HttpBackend } from '@angular/common/http';
import { User, UserData } from './models/models';
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

  loginUser(username, password) {
    /**
     * {
     *  "username": username,
     *  "password": password
     * }
     */
    return this.unsecuredHttpClient.post<UserData>(`${environment.backendURL}/login`, {username, password})
  }
}
