import {ReportCreaterDto} from "../core/dto/ReportCreaterDto";
import {Injectable} from "@angular/core";
import {SpecDocDto} from "../core/spec.doc.dto";
import {ApiService} from "./api.service";
import {ApiDictionaryService} from "./api.dictionary.service";
import {MessageSink} from "./message.sink";
import {filter, Observable} from "rxjs";
import {DocDto} from "../core/doc.dto";
import {BaseDictionary} from "../core/dto/BaseDictionary";
import {ReportBase} from "../core/dto/ReportBase";

@Injectable({ providedIn: 'root' })
export class FilterService{
  constructor(private api:ApiDictionaryService, private messageSink:MessageSink) {
  }
  public setError(error:string){
    this.messageSink.write$("ERROR", 'Ошибка загрузки Специализаций врачей')
      .subscribe({ complete: () => console.error(error) } );
  }
  public getTextFilter(filter:ReportBase): string{
    var result = '';
    if(!!filter.dateStart){
      result+='Дата начала: ' + filter.dateStart.toLocaleDateString() + '; ';
    }
    if(!!filter.dateFinish){
      result+='Дата окончания: ' + filter.dateFinish.toLocaleDateString() + '; ';
    }
    if(!!filter.doctorSpec){
      result+='Специализация доктора: ' + filter.doctorSpec.name + '; ';
    }
    if(!!filter.doctor){
      result+='Доктор: ' + filter.doctor.name + '; ';
    }
    return result;
  }
  public getSpecDoc():Observable<SpecDocDto[]> {
    return this.api.getSpecDoc();
  }
  public getDoc(spec?: any):Observable<DocDto[]> {
    return this.api.getDoc(spec);
  }

  public convertToCreate(filter:ReportBase){
    let creator: ReportCreaterDto = new ReportCreaterDto();
    creator.doctor = filter.doctor;
    creator.dateFinish = filter.dateFinish;
    creator.dateStart = filter.dateStart;
    creator.specDoctor = filter.doctorSpec;
    creator.typeReport = filter.type;
  }
}
