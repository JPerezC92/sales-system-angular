import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialogdelete',
  templateUrl: './dialogdelete.component.html',
  styleUrls: ['./dialogdelete.component.scss'],
})
export class DialogdeleteComponent {
  constructor(public dialogRef: MatDialogRef<DialogdeleteComponent>) {}
}
