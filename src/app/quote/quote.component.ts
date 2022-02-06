import { Component, OnInit,Output, } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})

export class QuoteComponent implements OnInit {
  quotes:Quote[]=[
    new Quote(1, 'by:Lupita Nyongo', 'All dreams are valid','Eve'),
    new Quote(2,'by:Kirkman Frost','We live to see tomorrow','Eve'),
    
  ];

  toggleDetails(index:any){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
    }

    completeQuote(isComplete:any, index:any){
      if (isComplete) {
        this. quotes.splice(index,1);
      }
    }

    deleteQuote(isComplete:any, index:any){
      if (isComplete) {
        let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].author}?`)
  
        if (toDelete){
          this.quotes.splice(index,1)
        }
      }
    }

    addNewQuote(quote:any){
      let quoteLength = this.quotes.length;
      quote.id = quoteLength+1;
      this.quotes.push(quote)

    }
        
  constructor() { }

  ngOnInit(): void {
  }

}
