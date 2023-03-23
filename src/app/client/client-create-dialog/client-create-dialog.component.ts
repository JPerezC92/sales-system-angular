import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ClientCreate } from 'src/app/models/ClientCreate';
import { ApiclientService } from 'src/app/services/apiclient.service';

@Component({
  selector: 'app-client-create-dialog',
  templateUrl: './client-create-dialog.component.html',
  styleUrls: ['./client-create-dialog.component.scss'],
})
export class ClientCreateDialogComponent {
  name = '';

  constructor(
    public dialogRef: MatDialogRef<ClientCreateDialogComponent>,
    private _ApiclientService: ApiclientService,
    public snackBar: MatSnackBar
  ) {}

  close() {
    this.dialogRef.close();
  }

  addClient() {
    const newClient: ClientCreate = { name: this.name };
    this._ApiclientService.addClient(newClient).subscribe((r) => {
      if (r.sucess) {
        this.dialogRef.close();
        this.snackBar.open('Client created successfully', '', {
          duration: 2000,
        });
      }
    });
  }
}
