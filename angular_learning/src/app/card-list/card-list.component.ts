import { Component, OnInit } from '@angular/core';
import { Cards } from '../model/card.model';

import { CardService } from '../card/services/card.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css'],
  providers: [CardService]
})
export class CardListComponent implements OnInit {

  cards: any = [];
  isAllCardOpen  = false;
  buttonText = "Open"

  constructor(private cardService: CardService) { 
    this.cards = cardService.cards
  }

  ngOnInit(): void {
    console.log(this.cards)
  }

  addNewCard(){
    const lastCard = this.cards.length + 1;
    this.cardService.addNewCard(lastCard)
  }

  openAllCard(){
    this.isAllCardOpen = !this.isAllCardOpen

    if(this.isAllCardOpen) this.buttonText = "Close";
    else this.buttonText = "Open"

    this.cardService.openAllCard(this.isAllCardOpen)
  }
}
