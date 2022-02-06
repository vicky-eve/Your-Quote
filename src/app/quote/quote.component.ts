import { Component, OnInit,Output, } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})

export class QuoteComponent implements OnInit {
  quote:Quote[]=[
    new Quote(1,'by:Lupita Nyongo', 'All dreams are valid','Eve',new Date() ),
    new Quote(2,'by:Kirkman ','Leaders are made not born', 'Eve', new Date()),
    
  ];

  toggleDetails(index:any){
    this.quote[index].showDescription = !this.quote[index].showDescription;
    }

    completeQuote(isComplete:any, index:any){
      if (isComplete) {
        this. quote.splice(index,1);
      }
    }

    deleteQuote(isComplete:any, index:any){
      if (isComplete) {
        let toDelete = confirm(`Are you sure you want to delete ${this.quote[index].author}?`)
  
        if (toDelete){
          this.quote.splice(index,1)
        }
      }
    }

    addNewQuote(quote:any){
      let quoteLength = this.quote.length;
      quote.id = quoteLength+1;
      this.quote.push(quote)

    }
        
  constructor() { }

  ngOnInit(): void {
  }

}
