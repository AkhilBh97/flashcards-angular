import { Component } from '@angular/core';
import { FlashcardsService } from 'src/app/services/flashcards.service';
import { Flashcard } from 'src/app/models/flashcard/flashcard';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { FlashcardAddDialogComponent } from '../flashcard-add-dialog/flashcard-add-dialog.component';
import { FlashcardEditDialogComponent } from '../flashcard-edit-dialog/flashcard-edit-dialog.component';

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
        this.createflashcard(data);
      }
    );
  }

  openEditDialog(flashcard: Flashcard){
    const dialogconfig = new MatDialogConfig();

    dialogconfig.disableClose = true;
    dialogconfig.autoFocus = true;

    dialogconfig.data = {
      id: flashcard.flashcardID,
      question: flashcard.question,
      answer: flashcard.answer
    }

    const dialogref = this.dialog.open(FlashcardEditDialogComponent, dialogconfig);

    dialogref.afterClosed().subscribe(
      data => {
        this.updateFlashcard(data);
      }
    )
  }

  createflashcard(flashcard: Flashcard){
    this.fcs.postFlashcard(flashcard).subscribe(
      data => {
        console.log(`Flashcard created with GUID: ${(data as Flashcard).flashcardID}`);
        this.getflashcards();
      },
      error => {
        console.log(error);
      }
    )
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

  updateFlashcard(flashcard: Flashcard){
    this.fcs.updateFlashcard(flashcard).subscribe(
      _ => {
        console.log(`Flashcard with guid: ${flashcard.flashcardID} updated.`);
        this.getflashcards();
      },
      error => {
        console.log(error);
      }
    )
  }

  deleteFlashcard(flashcard: Flashcard){
    this.fcs.removeFlashcard(flashcard).subscribe(
      _ => {
        console.log(`Flashcard with guid [${flashcard.flashcardID}] deleted successfully`);
        this.getflashcards();
      },
      error => {
        console.log(error);
      }
    )
  }

  
}
