import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bom',
  templateUrl: './bom.component.html',
  styleUrls: ['./bom.component.css']
})
export class BomComponent implements OnInit {
  isBomStarted = false;
  isLoading = true;
  isDone = false;
  isCorrect = false;

  constructor(){
    setTimeout(() => {
      this.isLoading = false;
    }, 1000)
  }

  ngOnInit(): void {
    
  }

  toggleBomStart(){
    this.isBomStarted = true;
  }

  toggleInput(val: any){
    this.isDone = val[0];
    this.isCorrect = val[1];
  }

  submitName(name: string){
    if(this.isCorrect) alert("Congratulation " + name + "!!");
    else alert("Sorry " + name + ", Try Again");
    this.isBomStarted = false;
    this.isDone = false;
    this.isCorrect = false;
  }

}
