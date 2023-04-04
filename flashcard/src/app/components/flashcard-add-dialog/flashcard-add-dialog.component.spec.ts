import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashcardAddDialogComponent } from './flashcard-add-dialog.component';

describe('FlashcardAddDialogComponent', () => {
  let component: FlashcardAddDialogComponent;
  let fixture: ComponentFixture<FlashcardAddDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlashcardAddDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlashcardAddDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
