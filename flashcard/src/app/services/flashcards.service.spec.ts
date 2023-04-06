import { TestBed } from '@angular/core/testing';

import { FlashcardsService } from './flashcards.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Flashcard } from '../models/flashcard/flashcard';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

describe('FlashcardsService', () => {
  let service: FlashcardsService;
  let httpmock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [FlashcardsService],
    });
    service = TestBed.inject(FlashcardsService);
    httpmock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpmock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  //test GET
  it('should return a Flaschards observable', () => {
    //set up a fake list of cards
    const mockcards: Flashcard[] = [
      {flashcardID: '1', question: 'Question1', answer: 'Answer1'},
      {flashcardID: '2', question: 'Question2', answer: 'Answer2'}
    ];
    service.getFlashcards().subscribe((flashcards) => {
      expect((flashcards as Flashcard[]).length).toBe(2);
      expect((flashcards as Flashcard[])).toEqual(mockcards);
    });

    const req = httpmock.expectOne(service.baseurl);
    expect(req.request.method).toBe('GET');
    req.flush(mockcards);
  });

  //test POST
  it('should add a flashcard', () => {
    const newcard: Flashcard = {flashcardID: '1', question:'Q', answer:'A'};
    service.postFlashcard(newcard).subscribe(data => {
      expect(data).toEqual(newcard);
    });

    const req = httpmock.expectOne(service.baseurl);
    expect(req.request.method).toBe('POST');
    req.flush(newcard);
  });

  //test PUT
  it('should update a flashcard', () => {
    const flashcard: Flashcard = {flashcardID:'1', question:'Q', answer:'A'};
    const spy = jasmine.createSpyObj<HttpClient>('HttpClient', ['put']);
    service = new FlashcardsService(spy);

    spy.put.and.returnValue(of(flashcard));

    service.updateFlashcard(flashcard).subscribe(data => {
      expect(data).toEqual(flashcard);
      expect(spy.put).toHaveBeenCalledTimes(1);
      expect(spy.put).toHaveBeenCalledWith(`${service.baseurl}/${flashcard.flashcardID}`, flashcard);
    });
  });

  //test DELETE
  it('should delete a flashcard', () => {
    const flashcard: Flashcard = {flashcardID:'1', question:'Q', answer:'A'};
    const spy = jasmine.createSpyObj<HttpClient>('HttpClient', ['delete']);
    service = new FlashcardsService(spy);

    spy.delete.and.returnValue(of(flashcard));

    service.removeFlashcard(flashcard).subscribe(data => {
      expect(data).toEqual(flashcard);
      expect(spy.delete).toHaveBeenCalledTimes(1);
      expect(spy.delete).toHaveBeenCalledWith(`${service.baseurl}/${flashcard.flashcardID}`);
    });
  });
});
