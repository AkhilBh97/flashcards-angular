import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FlashcardsComponent } from './components/flashcards/flashcards.component';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FlashcardTableComponent } from './components/flashcard-table/flashcard-table.component';
import { FlashcardCardComponent } from './components/flashcard-card/flashcard-card.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatDialogModule} from '@angular/material/dialog';
import { FlashcardAddDialogComponent } from './components/flashcard-add-dialog/flashcard-add-dialog.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { FlashcardEditDialogComponent } from './components/flashcard-edit-dialog/flashcard-edit-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    FlashcardsComponent,
    FlashcardTableComponent,
    FlashcardCardComponent,
    FlashcardAddDialogComponent,
    FlashcardEditDialogComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    //BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatDialogModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [FlashcardAddDialogComponent]
})
export class AppModule { }
