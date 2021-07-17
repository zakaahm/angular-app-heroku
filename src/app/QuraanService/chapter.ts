import { Verse } from "./verse"

export class Chapter {
    [x: string]: any;

    id:number
    ar:string
    en:string

    

    constructor(id:number, ar:string, en:string){
        this.id = id;
        this.ar = ar;
        this.en = en;
    }

}
