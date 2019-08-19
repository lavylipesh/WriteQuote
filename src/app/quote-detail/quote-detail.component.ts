import { Component, OnInit, Input ,Output,EventEmitter} from '@angular/core';
import {Quote} from '../quote';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {
  @Input()quote:Quote;
  @Output() isComplete = new EventEmitter<boolean>();

  
 numberOfLikes:number = 0;
 numberOfDislike:number = 0;
 upVote(){
   this.numberOfLikes++;
 }
 downVote(){
   this.numberOfDislike++;
 }
  quoteDelete(complete:boolean){
    this.isComplete.emit(complete);
  }
  constructor() { }
  
  
  ngOnInit() {
  }
  
}
