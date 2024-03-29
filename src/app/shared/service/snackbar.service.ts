import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { durationInMilliSeconds } from '../model/snack-bar.const';

@Injectable({ providedIn: 'root' })
export class SnackBarService {
  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar(message: string, action = 'OK') {
    this._snackBar.open(message, action, {
      duration: durationInMilliSeconds,
    });
  }
}
