import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Card } from '../model/card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() card : Card = new Card;
  @Output() onCardOpen = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onCardClick(id: number){
    this.onCardOpen.emit(id - 1)
  }
}
