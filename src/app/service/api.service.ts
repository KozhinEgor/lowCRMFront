import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {ReportInDB, Group, ParametrReport, ShowReport} from "../core/Classes";
import {map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private host = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

  getSearchReport(report: number){
    return this.http.get(this.host + '/report/saveReports/' + report).pipe(
      map(searchReports => searchReports as ParametrReport[])
    )
  }
  getReports(){

    return this.http.get(this.host + '/report/allReport/').pipe(
      map(searchReports => searchReports as ReportInDB[])
    );
  }
  getParametrReport(name_en:string){
    return this.http.get(this.host + '/report/findByName/'+name_en).pipe(
      map(parametrReport => parametrReport as ParametrReport)
    );
  }
  getGroup(report:number){
    return this.http.get(this.host + '/report/groupReport/' + report).pipe(
      map(groups => groups as Group[])
    )
  }
  showReport(report:ParametrReport){
    console.log(report);
    // return this. http.post(this.http + '/report/showReport',report).pipe(
    //   map(value => value as ShowReport)
    // )
  }
}
