import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Flashcard } from '../models/flashcard/flashcard';

@Injectable({
  providedIn: 'root'
})
export class FlashcardsService {
  baseurl = 'https://flashcards-ab.azurewebsites.net/Flashcards';

  constructor(private http: HttpClient) { 
  }

  getFlashcards() {
    return this.http.get(this.baseurl);
  }

  postFlashcard(flashcard: Flashcard){
    return this.http.post(this.baseurl, flashcard);
  }

  updateFlashcard(flashcard: Flashcard){
    return this.http.put(`${this.baseurl}/${flashcard.flashcardID}`, flashcard);
  }

  removeFlashcard(flashard: Flashcard){
    return this.http.delete(`${this.baseurl}/${flashard.flashcardID}`);
  }
}
