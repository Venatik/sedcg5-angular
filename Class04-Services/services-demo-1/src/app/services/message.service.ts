import { EventEmitter, Injectable } from "@angular/core";

interface Person {
  id: string;
  name: string;
  age: number;
}

@Injectable({
  providedIn: "root", // accessible anywhere in the app
})
export class MessageService {
  constructor() {}

  // "strictPropertyInitialization": false added to tsconfig.json, otherwise has to have a default value
  // message: string;

  message = new EventEmitter<string>();

  person = new EventEmitter<Person>();

  setMessage(messageValue: string) {
    console.log("Message in Service:", messageValue);
    this.message.emit(messageValue);

    this.person.emit({ id: "1", name: "John", age: 30 });
  }

  getMessage() {
    return this.message;
  }
}
