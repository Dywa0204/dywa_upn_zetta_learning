import { Injectable } from '@angular/core';
import { Cards } from 'src/app/model/card.model';

@Injectable()
export class CardService {
    cards = Cards;

    addNewCard(lastCard: number){
    this.cards.push({
        id: lastCard,
        isOpen: false,
        title: "Card " + lastCard,
        desc: "This Is Card " + lastCard
        })
    }

    openAllCard(isAllCardOpen: boolean) {
        this.cards.forEach((item: { isOpen: boolean; }) => {
            item.isOpen = isAllCardOpen;
        })
    }

  openOneCard(id: number) {
    this.cards[id].isOpen = !this.cards[id].isOpen
  }
}