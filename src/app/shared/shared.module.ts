import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { MaxLengthTextPipe } from './pipes/max-length-text.pipe';

import { ErrorPageComponent } from './error-page/error-page.component';

import { HighlightDirective } from './directives/highlight.directive';

@NgModule({
  imports: [
    MatSnackBarModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  exports: [
    ErrorPageComponent,
    HttpClientModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    HighlightDirective,
    MaxLengthTextPipe,
  ],
  declarations: [ErrorPageComponent, HighlightDirective, MaxLengthTextPipe],
})
export class SharedModule {}
