export class Persona{
    id?: number;
    nombre: string;
    apellido: string;
    img: string;
    acercaDe: string;
    bannerPersonal: string;


    constructor(nombre: string, apellido: string, img: string, acercaDe: string, bannerPersonal: string) {
       
        this.nombre = nombre;
        this.apellido = apellido;
        this.img = img;
        this.acercaDe = acercaDe;
        this.bannerPersonal= bannerPersonal;
   }

}