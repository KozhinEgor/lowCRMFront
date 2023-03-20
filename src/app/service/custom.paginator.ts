import {Injectable} from "@angular/core";
import {MatPaginatorIntl} from "@angular/material/paginator";

@Injectable()
export class CustomPaginatorIntl extends MatPaginatorIntl {
  itemsPerPageLabel = 'размер страницы';
  nextPageLabel = 'cледующая страница';
  previousPageLabel = 'предыдущая страница';
  firstPageLabel = 'первая';
  lastPageLabel = 'последняя';
  getRangeLabel = function (page: number, pageSize: number, length: number): string {
    return 'страница ' + (page + 1).toString();
  }
}
