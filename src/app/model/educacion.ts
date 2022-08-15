export class Educacion {
    id?: number;
    nombreE: string;
    descripcionE: string;
    imgEducacion: string;

    constructor(nombreE: string, descripcionE: string, imgEducacion:string) {
        this.nombreE = nombreE;
        this.descripcionE = descripcionE;
        this.imgEducacion = imgEducacion;
    }


}
