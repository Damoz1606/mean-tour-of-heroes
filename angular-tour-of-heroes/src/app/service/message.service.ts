import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messages: string[] = [];

  constructor() { }

  addMessage(msg: string): void{
    this.messages.push(msg);
  }

  clear():void{
    this.messages = [];
  }
}
