import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {VersesService} from '../QuraanService/verses.service';
import { Verse } from '../QuraanService/verse'

@Component({
  selector: 'app-verses',
  templateUrl: './verses.component.html',
  styleUrls: ['./verses.component.css']
})

export class VersesComponent implements OnInit {

  @Output() messageEvent= new EventEmitter<string>();

  constructor(private verse: VersesService, private route: ActivatedRoute) { }


  everything: any
  id : number;
  private audio: any

  //API quran-endpoint.vercel.app/

  ngOnInit(): void {
    
    this.id = +this.route.snapshot.params.id;

    this.verse.getChapters(this.id).
      subscribe(data => { this.everything= data, console.log(this.everything) }, 
                error => { console.error(error) }
                );
  }
  
  openFile(url){
    //this.count++;
    //console.log(url);
    var count= 0;
    const button = (document.getElementById('button') as HTMLButtonElement);
    /*
    if(this.audio.duration != 0) {
      
    console.log("clicked on the Play Button");
      this.count =  0;

      console.log(this.count)
    }
      */
    this.audio = new Audio ()
    this.audio.src = url;
    this.audio.load();
    this.audio.play();
    /*
    if(this.audio.currentTime != 0){

      button.disabled = true;
      console.log('button is disabled !!')

    } else {

      this.audio.load();
      this.audio.play();
    }
    */
    
    if(this.audio.play()){
        count++;
        console.log("button pushed")
        button.disabled = true;

    }
    button.disabled = false;
    console.log('okeay stopped')
    /*
    if(this.audio.play()){
      console.log("button pushed")
      button.disabled = true;
    } else {
      button.disabled = false;
    }
    console.log(this.count)
    */
   console.log("duration" , this.audio.duration) 
  }

  play(){

    const button = (document.getElementById('button') as HTMLButtonElement);
    console.log("clicked on the Play Button");

    this.audio.play();

    
    if(this.audio.currentTime = 0){
      button.disabled = true;
      console.log('button is disabled !!')
    }
  }
  pause(){
    this.audio.pause();
    console.log("clicked on the Play Button");
    
  }
  stop(){
   // this.count = 0;
    this.audio.pause();
    this.audio.currentTime = 0;
    console.log("clicked on the Play Button");
    
  }
}
