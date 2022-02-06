import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.css']
})
export class VotesComponent implements OnInit {

  @Output() vote = new EventEmitter<number>();

totalUpvotes: number = 0;
totalDownvotes: number =0;


  constructor() { }

  upVote() {
    this.totalUpvotes ++
    this.vote.emit(this.totalUpvotes)
    console.log("upvote",this.totalUpvotes)
    
  }

  downVote() {
    this.totalDownvotes ++
    this.vote.emit(this.totalDownvotes)
    console.log("downvote", this.totalDownvotes)
    
  }

  ngOnInit(): void {
  }

}
