import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {
  public userDetails:any[] = []
  constructor() { }
}
