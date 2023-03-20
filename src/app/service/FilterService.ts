import {FilterDto} from "../core/filter.dto";
import {Injectable} from "@angular/core";
import {SpecDocDto} from "../core/spec.doc.dto";
import {ApiService} from "./api.service";
import {ApiDictionaryService} from "./api.dictionary.service";
import {MessageSink} from "./message.sink";
import {Observable} from "rxjs";
import {DocDto} from "../core/doc.dto";

@Injectable({ providedIn: 'root' })
export class FilterService{
  constructor(private api:ApiDictionaryService, private messageSink:MessageSink) {
  }
  public setError(error:string){
    this.messageSink.write$("ERROR", 'Ошибка загрузки Специализаций врачей')
      .subscribe({ complete: () => console.error(error) } );
  }
  public getTextFilter(filter:FilterDto): string{
    var result = '';
    if(!!filter.dateStart){
      result+='Дата начала: ' + filter.dateStart.toLocaleDateString() + '; ';
    }
    if(!!filter.dateFinish){
      result+='Дата окончания ' + filter.dateFinish.toLocaleDateString() + '; ';
    }
    return result;
  }
  public getSpecDoc():Observable<SpecDocDto[]> {
    return this.api.getSpecDoc();
  }
  public getDoc():Observable<DocDto[]> {
    return this.api.getDoc();
  }
}
