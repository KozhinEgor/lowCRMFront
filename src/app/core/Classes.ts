import { TypeFilter, Function} from "../Enumeration";

export interface ReportInDB{
  id: number;
  name: string;
  name_en:string;
}
export interface Group{
  func: string;
  name: string;
  select: boolean;
}
export interface FromTable{
  name:string;
  main:boolean;
  joinTable:string;
  columnParent:string;
  columnChild:string;
  joinType:string;
}
export interface FilterReport{
  disabled: boolean;
  name:string;
  typeFilter:TypeFilter;
  value:object[];
  selectValue:object[]
}
export interface ShowValues{
  disabled: boolean;
  name:string;
  func:Function;
  type:string;
  axes: string;
  color: string;
}
export interface ParametrReport{
  //Номер Поиска(Отчета)
  id:number;
  //Имя поиска
  name:string;
  //Имя на английском
  name_en:string;
  //Таблицы для формирования отчета
  from:FromTable[];
  //Группировка по полю
  group:Group[];
  //Фильтры
  filter:FilterReport[];
  //Отображаемые значения
  showValues:ShowValues[];
  test:object;
}
export interface Value{
  data:object[];
  axes:string;
}
export interface ShowReport{
  name: string;
  xAxes: object[];
  value:Value[];
}
