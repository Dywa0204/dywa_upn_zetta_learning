import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardService } from '../services/card.service';
import { Card } from '../model/card.model';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css'],
  providers: [CardService]
})
export class CardDetailComponent implements OnInit {
  card : Card = new Card
  id : number = 0;
  isCardAvailable = false;

  constructor(private route: ActivatedRoute, private cardService: CardService ) { }

  ngOnInit(): void {
    if(this.route.snapshot.params["id"]){
      this.id = this.route.snapshot.params["id"] - 1;
      
      if(this.id >= 0 && this.id < this.cardService.getCardsLength()){
        this.isCardAvailable = true;
        this.card = this.cardService.getCardDetail(this.id);
      } else {
        this.isCardAvailable = false;
      }
    }else{
      this.isCardAvailable = false;
    }
    
  }

}
