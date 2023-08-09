import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: string[] = [];

  // add another message
  add(message: string) {
    this.messages.push(message);
  }
  // clear all msgs
  clear() {
    this.messages = [];
  }

  constructor() { }
}
