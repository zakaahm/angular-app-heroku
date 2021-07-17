export class Verse {

    id:number
    arabic: string
    englishName:string
    text:string
    arText: string
    audio: any


    constructor(id:number,arabic: string,englishName:string, text:string, arText:string, audio:any){
        this.id = id;
        this.arabic = arabic;
        this.englishName = englishName;
        this.text = text;
        this.arText = arText;
        this.audio=audio;
    }
    
}
