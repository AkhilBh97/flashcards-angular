import { Component, Input } from '@angular/core';
import { Flashcard } from 'src/app/models/flashcard/flashcard';

@Component({
  selector: 'app-flashcard-card',
  templateUrl: './flashard-card.component.html',
  styleUrls: ['./flashcard-card.component.css']
})
export class FlashcardCardComponent {
  @Input() flashcards: Flashcard[];

  constructor(){
    this.flashcards = [];
  }

  toggleAnswer(target: any){
    const cardcontent = target.parentNode.parentNode.querySelector('mat-card-content');
    var csv = cardcontent.getAttribute('style');
    if (csv.includes('inherit')) cardcontent.setAttribute('style', csv.replace('inherit', 'hidden'));
    else cardcontent.setAttribute('style', csv.replace('hidden', 'inherit'));
  }
}
