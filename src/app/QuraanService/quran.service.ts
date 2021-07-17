import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Chapter} from './chapter'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class QuranService {

  constructor(private http: HttpClient) { }

  //API: quran-endpoint.vercel.app/
  private baseUrl: string = "https://quraanapi.herokuapp.com/chapters"


  getChapters(): Observable<Chapter[]> {
    let url = `${this.baseUrl}`;
    return this.http.get<Chapter[]>(url);
   //this.http.get<Chapter[]>(url).subscribe(data=> console.log(data))
    
  }
}
