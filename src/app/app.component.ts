import { Component } from '@angular/core';
import { Quote } from './quote.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  quotes: Quote[] = [];
  newquote: Quote = new Quote();

  onSubmit(quoteForm) {
    this.quotes.push(this.newquote);
    this.sortQuotes();
    this.newquote = new Quote();
    quoteForm.reset();
  }

  rateQuote(eventData) {
    let quote: Quote = eventData[0];
    let vote : boolean = eventData[1];
    if(vote) {
      quote.score += 1;
    } else {
      quote.score -= 1;
    }
    this.sortQuotes();
  }

  deleteQuote(quote) {
    let i = this.quotes.indexOf(quote);
    this.quotes.splice(i, 1);
  }

  sortQuotes() {
    this.quotes.sort(function (a: Quote, b: Quote) {
      return b.score - a.score;
    });
  }
}
