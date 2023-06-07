import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private _isAdmin = false;

  constructor() { }

  get isAdmin(): boolean {
    return this._isAdmin;
  }

  changeRoleStatus(): void {
    this._isAdmin = !this._isAdmin;
  }

}
