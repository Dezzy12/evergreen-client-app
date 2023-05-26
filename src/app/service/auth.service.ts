import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User, UserLogin, UserResponse } from '../models/user.model';
import { LocalStorageUtils } from '../utils/local-storage.utils';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseUrl;
  constructor(private http: HttpClient) {
    
    
   }
   register(data: User):Observable<UserResponse> {
    return this.http.post<UserResponse>(`${this.baseUrl}/register/`, data);
   }

   login = (data: UserLogin): Observable<UserResponse> =>{
    return this.http.post<UserResponse>(`${this.baseUrl}/login/`, data);   
  }

  logout = () =>{
    LocalStorageUtils.deleteToken;
  }
}
