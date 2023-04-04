import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-flashcard-add-dialog',
  templateUrl: './flashcard-add-dialog.component.html',
  styleUrls: ['./flashcard-add-dialog.component.css']
})
export class FlashcardAddDialogComponent {
  form!: FormGroup;
  id: string;
  question: string;
  answer: string;

  constructor(
    private fb: FormBuilder,
    private dialogref: MatDialogRef<FlashcardAddDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data: any) {
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

    create(){
      this.dialogref.close(this.form.value);
    }

    close(){
      this.dialogref.close();
    }
}
