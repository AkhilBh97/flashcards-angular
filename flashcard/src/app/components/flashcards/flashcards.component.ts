import { Component } from '@angular/core';
import { FlashcardsService } from 'src/app/services/flashcards.service'; 
import { Flashcard } from 'src/app/models/flashcard/flashcard';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-flashcards',
  templateUrl: './flashcards.component.html',
  styleUrls: ['./flashcards.component.css'],
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

  toggleAnswer(target: any){
    console.log("Called");
    const cardcontent = target.parentNode.parentNode.querySelector('mat-card-content');
    var csv = cardcontent.style.visibility;
    if (csv === 'visible') cardcontent.style.visibility = 'hidden';
    else cardcontent.style.visibility = 'visible';
  }
}
