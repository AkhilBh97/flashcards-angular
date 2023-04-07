import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Flashcard } from 'src/app/models/flashcard/flashcard';

@Component({
  selector: 'app-flashcard-edit-dialog',
  templateUrl: './flashcard-edit-dialog.component.html',
  styleUrls: ['./flashcard-edit-dialog.component.css']
})
export class FlashcardEditDialogComponent {
  form!:FormGroup;
  id: string;
  question: string;
  answer: string;

  constructor(
    private fb: FormBuilder,
    private dialogref: MatDialogRef<FlashcardEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data:any) {
      this.id = data.id;
      this.question = data.question;
      this.answer = data.answer;
    }

    ngOnInit(){
      this.form = this.fb.group({
        id: [this.id, []],
        question: [this.question, []],
        answer: [this.answer, []]
      });
    }

    save(){
      this.dialogref.close(this.form.value)
    }

    close(){
      this.dialogref.close();
    }
}
