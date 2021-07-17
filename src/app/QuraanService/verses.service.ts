import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Verse} from '../QuraanService/verse'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VersesService {
  

  constructor(private http: HttpClient) { }

  //API: quran-endpoint.vercel.app/


  getChapters(id : any): Observable<Verse[]> {
    let url = `https://quraanapi.herokuapp.com/surah/${id}`;
    console.log(url)
    return this.http.get<Verse[]>(url);
  } 


}


