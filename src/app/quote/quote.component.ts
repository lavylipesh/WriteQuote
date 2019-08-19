import { Component, OnInit ,Input} from '@angular/core';
import{Quote} from '../quote';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  

  public quote:Quote[] = [
    new Quote(1, 'Christopher Khajira', 'Lovely Sarrah','One of the truest tests of integrity is its blunt refusal to be compromised',new Date (2019,2,3)),    
    new Quote(3,'Omosh','Lupita Nyongo','Your dreams are valid',new Date(2019,1,12)),
    new Quote(4,'Lavender Chemu','Meymey','Good things go to those who HUSTLE',new Date(2019,0,18)),
    new Quote(5,'Tatiana Chebet','Brayo','Procrastination is the first step to never doing it',new Date(2019,2,14)),
    new Quote(6,'Collins Muks','Kevoyyi','Find what you love and let it kill you',new Date(2019,3,14)),

    
    
  ];
  

  toggleDetails(index){
    this.quote[index].showDescription = !this.quote[index].showDescription;
  }
  deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quote[index].name}?`)
      if(toDelete)
      this.quote.splice(index,1);
    }

  }
  numberOfLikes:number;
  likeButtonClick(){
    this.numberOfLikes++;
  }
  dislikeButtonClick(){
    this.numberOfLikes--;
  }
  addNewQuote(quote){
    let quoteLength=this.quote.length;
    quote.id=quoteLength+1;
    quote.quoteDate=new Date(quote.quoteDate)
    this.quote.push(quote)
  }


  constructor() { }

  ngOnInit() {
  }

}
