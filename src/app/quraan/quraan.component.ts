import { Component, OnInit } from '@angular/core';

import {QuranService} from '../QuraanService/quran.service';
import { Chapter } from '../QuraanService/chapter';
import { VersesService } from '../QuraanService/verses.service'

@Component({
  selector: 'app-quraan',
  templateUrl: './quraan.component.html',
  styleUrls: ['./quraan.component.css']
})
export class QuraanComponent implements OnInit {

  constructor( private chapter:QuranService) { 
  }

  //API quran-endpoint.vercel.app/
  chapters: Chapter[];
  searchResults : Chapter[];
  searchText;

  ngOnInit(): void {
    
    this.chapter.getChapters().
      subscribe(data => { this.chapters = data, console.log(this.chapters) }, 
        error => { console.error(error) });  

  }

  Search(){

   

  }

}
