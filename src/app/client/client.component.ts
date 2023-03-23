import { Component, OnInit } from '@angular/core';
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

  constructor(private _apiclientService: ApiclientService) {}

  ngOnInit(): void {
    this.getClientList();
  }

  getClientList() {
    this._apiclientService.getClientList().subscribe((r) => {
      this.clientList = r.data || [];
    });
  }
}
