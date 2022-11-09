import { Component, OnInit } from '@angular/core';
import { Cards } from '../model/card.model';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {

  cards = Cards;
  isAllCardOpen  = false;
  buttonText = "Open"

  constructor() { }

  ngOnInit(): void {
    console.log(this.cards)
  }

  addNewCard(){
    const lastCard = this.cards.length + 1;
    this.cards.push({
      id: lastCard,
      isOpen: false,
      title: "Card " + lastCard,
      desc: "This Is Card " + lastCard
    })
  }

  openAllCard(){
    this.isAllCardOpen = !this.isAllCardOpen

    if(this.isAllCardOpen) this.buttonText = "Close";
    else this.buttonText = "Open"

    this.cards.forEach(item => {
      item.isOpen = this.isAllCardOpen;
    })
  }

  onCardOpen(id: number){
    this.cards[id].isOpen = !this.cards[id].isOpen;
  }
}
