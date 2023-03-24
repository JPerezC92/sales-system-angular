import { SaleDetailCreate } from './SaleDetailCreate';

export interface SaleCreate {
  idClient: number;
  saleDetailList: SaleDetailCreate[];
}
