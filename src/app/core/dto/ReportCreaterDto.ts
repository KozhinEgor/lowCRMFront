import {BaseDictionary} from "./BaseDictionary";
import {TypeReport} from "../enumarate/TypeReport";

export class ReportCreaterDto {
  typeReport: TypeReport | null = null;
  dateStart: Date | null = null;
  dateFinish: Date | null = null;
  doctor: BaseDictionary | null = null;
  specDoctor: BaseDictionary | null = null;
}
