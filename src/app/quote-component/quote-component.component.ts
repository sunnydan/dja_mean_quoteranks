import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from './../quote.service';

@Component({
  selector: 'app-quote-component',
  templateUrl: './quote-component.component.html',
  styleUrls: ['./quote-component.component.css']
})
export class QuoteComponentComponent implements OnInit {
  @Input() quote: Quote;

  @Output() voteEmitter = new EventEmitter();
  @Output() deleteEmitter = new EventEmitter();
  constructor() { }

    triggerVote(vote: boolean) {
      console.log(vote);
      let data = [this.quote, vote];
      this.voteEmitter.emit(data);
    }

    triggerDelete() {
      this.deleteEmitter.emit(this.quote);
    }

  ngOnInit() {
  }

}
