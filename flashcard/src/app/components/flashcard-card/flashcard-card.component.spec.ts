import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FlashcardCardComponent } from './flashcard-card.component';
import { MatCardModule } from '@angular/material/card';
import { Flashcard } from 'src/app/models/flashcard/flashcard';

describe('FlashardCardComponent', () => {
  let component: FlashcardCardComponent;
  let fixture: ComponentFixture<FlashcardCardComponent>;
  let mockcards: Flashcard[];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatCardModule],
      declarations: [ FlashcardCardComponent ]
    })
    .compileComponents();
    mockcards = [
      {flashcardID: '1', question: 'Question1', answer: 'Answer1'},
      {flashcardID: '2', question: 'Question2', answer: 'Answer2'}
    ];
    fixture = TestBed.createComponent(FlashcardCardComponent);
    component = fixture.componentInstance;
    component.flashcards = mockcards;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    
    const mdcontent = fixture.debugElement.nativeElement.querySelector('.cardanswer');
    const togbut = fixture.debugElement.nativeElement.querySelector('.toggleanswerbutton');
    expect(component).toBeTruthy();
    expect(mdcontent).toBeTruthy();
    expect(mdcontent.style.visibility).toBe('hidden');
    expect(togbut).toBeTruthy();
  });

  it('should toggle the mat-card-content to be visible', () => {
    const togbut = fixture.debugElement.nativeElement.querySelector('.toggleanswerbutton');
    spyOn(component, 'toggleAnswer');

    togbut.click();
    fixture.detectChanges();

    expect(component.toggleAnswer).toHaveBeenCalled();
  });
});
