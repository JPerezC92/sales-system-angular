import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SaleCreate } from 'src/app/models/SaleCreate';
import { SaleDetailCreate } from 'src/app/models/SaleDetailCreate';
import { ApisaleService } from 'src/app/services/apisale.service';

@Component({
  selector: 'app-saledialog',
  templateUrl: './saledialog.component.html',
  styleUrls: ['./saledialog.component.scss'],
})
export class SaledialogComponent {
  public sale: SaleCreate = { idClient: 2, saleDetailList: [] };
  public saleDetailList: SaleDetailCreate[] = [];

  public detailForm = this._FormBuilder.group({
    quantity: [0, Validators.required],
    total: [0, Validators.required],
    idProduct: [1, Validators.required],
  });

  constructor(
    public dialogRef: MatDialogRef<SaledialogComponent>,
    public _MatSnackBar: MatSnackBar,
    private _FormBuilder: FormBuilder,
    public _ApisaleService: ApisaleService
  ) {}

  close() {
    this.dialogRef.close();
  }

  addDetail() {
    const { idProduct, quantity, total } = this.detailForm.value;

    if (!idProduct || !quantity || !total) return;
    this.saleDetailList.push({ idProduct, quantity, total });
  }

  addSale() {
    this.sale.saleDetailList = this.saleDetailList;
    this._ApisaleService.add(this.sale).subscribe((r) => {
      if (r.sucess) {
        this.dialogRef.close();
        this._MatSnackBar.open('Added sucessfully', '', { duration: 2000 });
      }
    });
  }
}
