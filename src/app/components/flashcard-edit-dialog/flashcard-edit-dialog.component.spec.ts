import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashcardEditDialogComponent } from './flashcard-edit-dialog.component';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('FlashcardEditDialogComponent', () => {
  let component: FlashcardEditDialogComponent;
  let fixture: ComponentFixture<FlashcardEditDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatDialogModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        NoopAnimationsModule
      ],
      declarations: [ FlashcardEditDialogComponent ],
      providers: [
        {
          provide: MatDialogRef,
          useValue: {
            close: () => {}
          }
        },
        {
          provide: MAT_DIALOG_DATA,
          useValue: {}
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlashcardEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should trigger close on Close click', () => {
    const dialogrefinject = TestBed.inject(MatDialogRef);
    spyOn(dialogrefinject, 'close');
    const closebutton = fixture.debugElement.nativeElement.querySelector('#closeeditdiagbutton');

    closebutton.click();

    expect(dialogrefinject.close).toHaveBeenCalled();
  });

  it('should trigger save on Save click', () => {
    
    spyOn(component, 'save');
    const createbutton = fixture.debugElement.nativeElement.querySelector('#savebutton');
    const formvalue = {id:'1', question:'Q', answer:'A'};

    component.form.setValue(formvalue);
    fixture.detectChanges();
    createbutton.click();

    expect(component.save).toHaveBeenCalled();
    expect(component.form.value).toEqual(formvalue);
  });
});
