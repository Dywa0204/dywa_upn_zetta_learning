import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Card } from '../model/card.model';

import { CardService } from '../services/card.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  providers: [CardService]
})
export class CardComponent implements OnInit {

  @Input() card : Card = new Card;

  constructor(private cardService : CardService) { }

  ngOnInit(): void {
  }

  onCardClick(id: number){
    this.cardService.openOneCard(id - 1)
  }
}
