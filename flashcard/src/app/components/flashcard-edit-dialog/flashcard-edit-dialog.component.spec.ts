import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashcardEditDialogComponent } from './flashcard-edit-dialog.component';

describe('FlashcardEditDialogComponent', () => {
  let component: FlashcardEditDialogComponent;
  let fixture: ComponentFixture<FlashcardEditDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlashcardEditDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlashcardEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
