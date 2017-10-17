import { Injectable } from '@angular/core';

@Injectable()
export class Quote {
  text: string = "";
  author: string = "";
  score: number = 0;

  constructor() { }

}
