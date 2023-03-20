import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {ParametrReport} from "../core/Classes";
import {SpecDocDto} from "../core/spec.doc.dto";
import {DocDto} from "../core/doc.dto";

@Injectable({
  providedIn: 'root'
})
export class ApiDictionaryService {
  private host = environment.apiUrl;

  constructor(private http: HttpClient) {
  }
  public getSpecDoc(): Observable<SpecDocDto[]>{
    return this.http.get<SpecDocDto[]>(this.host + '/dictionary/doctor-spec')
  }
  public getDoc(): Observable<DocDto[]>{
    return this.http.get<DocDto[]>(this.host + '/dictionary/doctor')
  }
}
