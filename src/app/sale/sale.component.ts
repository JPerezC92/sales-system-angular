import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SaledialogComponent } from 'src/app/sale/saledialog/saledialog.component';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.scss'],
})
export class SaleComponent {
  constructor(public _MatDialog: MatDialog, public _MatSnackBar: MatSnackBar) {}

  openSaleDialog() {
    const dialog = this._MatDialog.open(SaledialogComponent, {
      width: '300',
    });
  }
}
