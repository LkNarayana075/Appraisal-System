import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthgurdserviceService {
  constructor() {}
  gettoken() {
    return !!localStorage.getItem('SeesionUser');
  }
}
