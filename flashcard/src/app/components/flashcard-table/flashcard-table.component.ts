import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Flashcard } from 'src/app/models/flashcard/flashcard';

@Component({
  selector: 'app-flashcard-table',
  templateUrl: './flashcard-table.component.html',
  styleUrls: ['./flashcard-table.component.css']
})
export class FlashcardTableComponent {
  @Input() flashcards: Flashcard[];
  @Output() edithandler = new EventEmitter<Flashcard>();
  @Output() deletehandler = new EventEmitter<Flashcard>();

  constructor(){
    this.flashcards = [];
  }

  onDelete(flashcard: Flashcard){
    this.deletehandler.emit(flashcard);
  }

  onEdit(flashcard: Flashcard){
    //console.log(`called onEdit() with guid: ${flashcard.flashcardID}\nq: ${flashcard.question}\na: ${flashcard.answer}`);
    this.edithandler.emit(flashcard);
  }
}
