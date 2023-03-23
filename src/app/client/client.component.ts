import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ClientCreateDialogComponent } from 'src/app/client/client-create-dialog/client-create-dialog.component';
import { ClientEndpoint } from 'src/app/models/ClientEndpoint';
import { ApiclientService } from 'src/app/services/apiclient.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss'],
})
export class ClientComponent implements OnInit {
  clientList: ClientEndpoint[] = [];

  columns = ['id', 'name'];

  constructor(
    private _apiclientService: ApiclientService,
    public matDialog: MatDialog
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
}
