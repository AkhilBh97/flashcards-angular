import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FlashcardsService {

  constructor(private http: HttpClient) { }

  getFlashcards() {
    return this.http.get('http://localhost:5154/Flashcards');
  }
}
