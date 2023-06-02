import {TypeReport} from "../enumarate/TypeReport";
import {User} from "./User";
import {BaseDictionary} from "./BaseDictionary";

export class ReportBase{

  public id: string | null = null;

  public createdDate: Date | null = null;

  public type: TypeReport | null = null;

  public creater: User | null = null;

  public dateStart: Date | null = null;

  public dateFinish: Date | null = null;

  public doctorSpec: BaseDictionary | null = null;

  public  doctor: BaseDictionary | null = null;

  public precent: number | null = null;

  public done: boolean | null = null;
}
