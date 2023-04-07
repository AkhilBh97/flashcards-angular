import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FlashcardsComponent } from "../components/flashcards/flashcards.component";

const routes: Routes = [
    {path: '', redirectTo: '/app-flashcards', pathMatch: 'full'},
    {path: 'app-flashcards', component:FlashcardsComponent}
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}