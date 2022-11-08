import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-bom-counter',
  templateUrl: './bom-counter.component.html',
  styleUrls: ['./bom-counter.component.css']
})
export class BomCounterComponent implements OnInit {

  @Output() onDone = new EventEmitter<boolean[]>();

  timeCounterInterval: any;
  buttons : any = [];
  isButtonDisabled = false;
  buttonCorrect = 0;
  titleText = "Press the Correct Button to Stop the Bomb!!";
  titleClass = "netral";
  totalButtons = 6;
  timeCounter = (this.totalButtons*10)/2;

  constructor() { }

  ngOnInit(): void {
    this.timeCounterInterval = setInterval(() => {
      this.timeCounter--;

      if(this.timeCounter == 0) this.onBombExplode()
    }, 1000)

    while(this.buttons.length < this.totalButtons){
        var r = Math.floor(Math.random() * this.totalButtons) + 1;
        if(this.buttons.indexOf(r) === -1) this.buttons.push(r);
    }

    this.buttons.forEach((item: any, index : number) => {
      if(item <= (this.totalButtons/2)) this.buttons[index] = true;
      else this.buttons[index] = false;
    });

    console.log(this.buttons);
    
  }

  onBombExplode(){
    this.stopInterval(false);
    this.titleText = "THE BOMB IS EXPLODED!!!";
    this.titleClass = "wrong"
  }

  onBombDeactivated(){
    this.stopInterval(true);
    this.titleText = "THE BOMB IS DEACTIVATED!!";
    this.titleClass = "correct"
  }

  stopInterval(isCorrect: boolean){
    clearInterval(this.timeCounterInterval);
    this.isButtonDisabled = true;
    this.onDone.emit([true, isCorrect]);
  }

  onButtonBombToggle(isButton: any, event: any){
    if(isButton){
      this.buttonCorrect++;

      if(this.buttonCorrect == (this.totalButtons/2)){
        this.onBombDeactivated();
      }
      event.target.style.backgroundColor = "green";
    }else{
      this.onBombExplode();
      event.target.style.backgroundColor = "red";
    }
  }
}
