import { Component } from '@angular/core';
import { FlashcardsService } from 'src/app/services/flashcards.service';
import { Flashcard } from 'src/app/models/flashcard/flashcard';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { FlashcardAddDialogComponent } from '../flashcard-add-dialog/flashcard-add-dialog.component';

@Component({
  selector: 'app-flashcards',
  templateUrl: './flashcards.component.html',
  styleUrls: ['./flashcards.component.css'],
})
export class FlashcardsComponent {
  cardvis = 'visible';
  tabvis = 'hidden';
  flashcards: Flashcard[];
  constructor(private fcs: FlashcardsService, private dialog: MatDialog) {
    this.flashcards = [];
  }

  ngOnInit() {
    this.getflashcards();
  }

  toggleCardTable(event: MatSlideToggleChange) {
    console.log("Called togglechange");
    if (this.cardvis === 'visible') {
      this.cardvis = 'hidden';
      this.tabvis = 'visible';
    }
    else {
      this.cardvis = 'visible';
      this.tabvis = 'hidden';
    }
  }

  openAddDialog() {
    const dialogconfig = new MatDialogConfig();

    dialogconfig.disableClose = true;
    dialogconfig.autoFocus = true;

    dialogconfig.data = {
      id: null,
      question: '',
      answer: ''
    }

    const dialogref = this.dialog.open(FlashcardAddDialogComponent, dialogconfig);

    dialogref.afterClosed().subscribe(
      data => {
        this.fcs.postFlashcard(data).subscribe(
          createdata => {
            console.log(`Flashcard created with GUID: ${(createdata as Flashcard).flashcardID}`);
            this.getflashcards();
          },
          createerror => {
            console.log(createerror);
          }
        );
      }
    );
  }

  getflashcards(){
    this.fcs.getFlashcards().subscribe(
      data => {
        this.flashcards = data as Flashcard[];
      },
      error => {
        console.log(error);
      }
    );
  }
}
