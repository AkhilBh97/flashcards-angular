import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FlashcardAddDialogComponent } from './flashcard-add-dialog.component';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('FlashcardAddDialogComponent', () => {
  let component: FlashcardAddDialogComponent;
  let fixture: ComponentFixture<FlashcardAddDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatDialogModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        NoopAnimationsModule,
      ],
      declarations: [FlashcardAddDialogComponent],
      providers: [
        {
          provide: MatDialogRef,
          useValue: {
            close: () => {}
          }
        },
        {
          provide: MAT_DIALOG_DATA,
          useValue: {},
        }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(FlashcardAddDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // ! These tests cover code that other tests already go over
  /* it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should init', () => {
    const defaultdata = {id:null, question:null, answer:null};

    component.ngOnInit();

    expect(component.form.get('id')?.value).toEqual(defaultdata.id);
    expect(component.form.get('question')?.value).toEqual(defaultdata.question);
    expect(component.form.get('answer')?.value).toEqual(defaultdata.answer);
  }); */

  it('should trigger close on Close click', () => {
    const dialogrefinject = TestBed.inject(MatDialogRef);
    spyOn(dialogrefinject, 'close');
    const closebutton = fixture.debugElement.nativeElement.querySelector('#closediagbutton');

    closebutton.click();

    expect(dialogrefinject.close).toHaveBeenCalled();
  });

  it('should trigger create on Create click', () => {
    
    spyOn(component, 'create');
    const createbutton = fixture.debugElement.nativeElement.querySelector('#createbutton');
    const formvalue = {id:null, question:'Q', answer:'A'};

    component.form.setValue(formvalue);
    fixture.detectChanges();
    createbutton.click();

    expect(component.create).toHaveBeenCalled();
    expect(component.form.value).toEqual(formvalue);
  });
});
