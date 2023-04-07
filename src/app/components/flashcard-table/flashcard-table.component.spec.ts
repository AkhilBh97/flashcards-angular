import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashcardTableComponent } from './flashcard-table.component';
import { Flashcard } from 'src/app/models/flashcard/flashcard';

describe('FlashcardTableComponent', () => {
  let component: FlashcardTableComponent;
  let fixture: ComponentFixture<FlashcardTableComponent>;
  let mockcards: Flashcard[];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlashcardTableComponent ]
    })
    .compileComponents();

    mockcards = [
      {flashcardID: '1', question: 'Question1', answer: 'Answer1'},
      {flashcardID: '2', question: 'Question2', answer: 'Answer2'}
    ];
    fixture = TestBed.createComponent(FlashcardTableComponent);
    component = fixture.componentInstance;
    component.flashcards=mockcards;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call onEdit when Edit is clicked', () => {
    const editbutton = fixture.debugElement.nativeElement.querySelector('.tableeditbutton');
    spyOn(component, 'onEdit');

    editbutton.click();
    fixture.detectChanges();

    expect(component.onEdit).toHaveBeenCalledWith(mockcards[0]);
  });

  it('should call onDelete when Delete is clicked', () => {
    const deletebutton = fixture.debugElement.nativeElement.querySelector('.tabledeletebutton');
    spyOn(component, 'onDelete');

    deletebutton.click();
    fixture.detectChanges();

    expect(component.onDelete).toHaveBeenCalledWith(mockcards[0]);
  });
});
