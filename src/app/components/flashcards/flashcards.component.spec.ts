import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashcardsComponent } from './flashcards.component';
import { HttpClientModule } from '@angular/common/http';
import { FlashcardsService } from 'src/app/services/flashcards.service';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FlashcardCardComponent } from '../flashcard-card/flashcard-card.component';
import { FlashcardTableComponent } from '../flashcard-table/flashcard-table.component';
import { Flashcard } from 'src/app/models/flashcard/flashcard';
import { of, throwError } from 'rxjs';

describe('FlashcardsComponent', () => {
  let component: FlashcardsComponent;
  let fixture: ComponentFixture<FlashcardsComponent>;
  //let flashcardservice: FlashcardsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        MatDialogModule,
        MatSlideToggleModule
      ],
      declarations: [ 
        FlashcardsComponent,
        FlashcardCardComponent,
        FlashcardTableComponent
      ],
      providers: [
        FlashcardsService
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlashcardsComponent);
    component = fixture.componentInstance;
    //flashcardservice = TestBed.inject(FlashcardsService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create a flashcard', () => {
    const flashcard: Flashcard = {flashcardID:'1', question:'Q', answer:'A'};
    const fcservice = TestBed.inject(FlashcardsService);
    const getspy = spyOn(component, 'getflashcards');

    spyOn(fcservice, 'postFlashcard').and.returnValue(of(flashcard));

    component.createflashcard(flashcard);

    expect(fcservice.postFlashcard).toHaveBeenCalledWith(flashcard);
    expect(getspy).toHaveBeenCalled();
  });

  it('should log an error if POST returns an error', () => {
    const error = new Error('');
    const fcservice = TestBed.inject(FlashcardsService);
    const fcsSpy = spyOn(fcservice, 'postFlashcard').and.returnValue(throwError(error));
    spyOn(console, 'log');

    component.createflashcard({flashcardID:'',question:'',answer:''});
    expect(console.log).toHaveBeenCalledWith(error);
  });

  it('should get a list of flashcards', () => {
    const mockFlashcards: Flashcard[] = [
      { flashcardID: '1', question: 'Q1', answer: 'A1' },
      { flashcardID: '2', question: 'Q2', answer: 'A2' }
    ];
    const fcservice = TestBed.inject(FlashcardsService);

    const fcsSpy = spyOn(fcservice, 'getFlashcards').and.returnValue(of(mockFlashcards));
  
    component.getflashcards();
  
    expect(fcsSpy).toHaveBeenCalled();
    expect(component.flashcards).toEqual(mockFlashcards);
  });

  it('should log an error if GET returns an error', () => {
    const error = new Error('');
    const fcservice = TestBed.inject(FlashcardsService);
    const fcsSpy = spyOn(fcservice, 'getFlashcards').and.returnValue(throwError(error));
    spyOn(console, 'log');

    component.getflashcards();

    expect(console.log).toHaveBeenCalledWith(error);
  });

  it('should update a flashcard', () => {
    const mockcard: Flashcard = {flashcardID:'1', question:'Q', answer:'A'};
    const fcservice = TestBed.inject(FlashcardsService);
    const fcsSpy = spyOn(fcservice, 'updateFlashcard').and.returnValue(of(mockcard));
    spyOn(component, 'getflashcards');

    component.updateFlashcard(mockcard);
    expect(fcsSpy).toHaveBeenCalledWith(mockcard);
    expect(component.getflashcards).toHaveBeenCalled();
  });
  
  it('should log an error if Update returns an error', () => {
    const error = new Error('');
    const fcservice = TestBed.inject(FlashcardsService);
    const fcsSpy = spyOn(fcservice, 'updateFlashcard').and.returnValue(throwError(error));
    spyOn(console, 'log');
    
    component.updateFlashcard({flashcardID:'',question:'',answer:''});

    expect(console.log).toHaveBeenCalledWith(error);
  });

  it('should delete a flashcard', () => {
    const mockcard: Flashcard = {flashcardID:'1', question:'Q', answer:'A'};
    const fcservice = TestBed.inject(FlashcardsService);
    const fcsSpy = spyOn(fcservice, 'removeFlashcard').and.returnValue(of(mockcard));
    spyOn(component, 'getflashcards');

    component.deleteFlashcard(mockcard);

    expect(fcsSpy).toHaveBeenCalledWith(mockcard);
    expect(component.getflashcards).toHaveBeenCalled();
  });

  it('should log an error if Delete returns an error', () => {
    const error = new Error('');
    const fcservice = TestBed.inject(FlashcardsService);
    const fcsSpy = spyOn(fcservice, 'removeFlashcard').and.returnValue(throwError(error));
    spyOn(console, 'log');
    
    component.deleteFlashcard({flashcardID:'',question:'',answer:''});

    expect(console.log).toHaveBeenCalledWith(error);
  });
});
