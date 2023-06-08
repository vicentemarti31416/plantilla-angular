import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SelectService {

  private hola: string[] = ['h', 'o', 'l', 'a'];
  private mundo: string[] = ['m', 'u', 'n', 'd', 'o'];
  private java: string[] = ['j', 'a', 'v', 'a'];
  private typescript: string[] = ['t', 'y', 'p', 'e', 's', 'c', 'r', 'y', 'p', 't'];

  constructor() { }

  selectStrings(term: string): string[] {
    if (term === 'hola') return this.hola;
    if (term === 'mundo') return this.mundo;
    if (term === 'java') return this.java;
    if (term === 'typescript') return this.typescript;
    else return [];
  }

}
