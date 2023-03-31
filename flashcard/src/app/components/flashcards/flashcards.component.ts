import { Component } from '@angular/core';
import { FlashcardsService } from 'src/app/services/flashcards.service'; 
import { Flashcard } from 'src/app/models/flashcard/flashcard';

@Component({
  selector: 'app-flashcards',
  templateUrl: './flashcards.component.html',
  styleUrls: ['./flashcards.component.css']
})
export class FlashcardsComponent {
  flashcards: Flashcard[];
  constructor (private fcs: FlashcardsService){
    this.flashcards = [];
  }

  ngOnInit(){
    this.fcs.getFlashcards().subscribe(
      data => {
        this.flashcards = data as Flashcard[];
      },
      error => {
        console.log(error);
      }
    )
  }
}
