import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class HttpService<T> {
  apiUrlAwsls: string =
    "https://4qumgis8n5.execute-api.eu-west-1.amazonaws.com/dev/locationsearch";
  apiUrlNominatim: string =
    "https://nominatim.openstreetmap.org/search?format=json&limit=3&q=";

  constructor(private http: HttpClient) {}

  fetchAddressesAwsls(queryaddress: string): Observable<T[]> {
    return this.http.post<T[]>(this.apiUrlAwsls, {
      indexname: "siteplaceindex",
      text: queryaddress,
      filtercountries: ["FRA"],
    });
  }

  fetchAddressesNominatim(queryaddress: string): Observable<T[]> {
    return this.http.get<T[]>(this.apiUrlNominatim + queryaddress + " France");
  }
}
