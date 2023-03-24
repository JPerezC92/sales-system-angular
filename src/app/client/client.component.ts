import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ClientCreateDialogComponent } from 'src/app/client/client-create-dialog/client-create-dialog.component';
import { DialogdeleteComponent } from 'src/app/common/dialogdelete/dialogdelete.component';
import { ClientEndpoint } from 'src/app/models/ClientEndpoint';
import { ApiclientService } from 'src/app/services/apiclient.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss'],
})
export class ClientComponent implements OnInit {
  clientList: ClientEndpoint[] = [];

  columns = ['id', 'name', 'actions'];

  constructor(
    private _apiclientService: ApiclientService,
    public matDialog: MatDialog,
    public snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.getClientList();
  }

  getClientList() {
    this._apiclientService.getClientList().subscribe((r) => {
      this.clientList = r.data || [];
    });
  }

  openClientCreateDialog() {
    const dialogRef = this.matDialog.open(ClientCreateDialogComponent, {
      width: '300',
    });

    dialogRef.afterClosed().subscribe(() => {
      this.getClientList();
    });
  }

  openEdit(client: ClientEndpoint) {
    const dialogRef = this.matDialog.open(ClientCreateDialogComponent, {
      width: '300',
      data: client,
    });

    dialogRef.afterClosed().subscribe(() => {
      this.getClientList();
    });
  }

  deleteClient(client: ClientEndpoint) {
    const dialogRef = this.matDialog.open(DialogdeleteComponent, {
      width: '300',
      data: client,
    });

    dialogRef.afterClosed().subscribe((r) => {
      console.log(r);
      if (r) {
        this._apiclientService.deleteClient(client.id).subscribe((r) => {
          if (r.sucess) {
            this.getClientList();
            this.snackBar.open('Deleted successfully', '', { duration: 2000 });
          }
        });
      }
    });
  }
}
