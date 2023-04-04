import { Component, Input } from '@angular/core';
import { Flashcard } from 'src/app/models/flashcard/flashcard';

@Component({
  selector: 'app-flashcard-table',
  templateUrl: './flashcard-table.component.html',
  styleUrls: ['./flashcard-table.component.css']
})
export class FlashcardTableComponent {
  @Input() flashcards: Flashcard[];
  constructor(){
    this.flashcards = [];
  }

}
