import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public endPoint = environment.apiLocalUrl;
  public controller = 'users'
  constructor(private http: HttpClient) { }

  public getAll(){
    return this.http.get(`${this.endPoint}/${this.controller}`);
  }
}
