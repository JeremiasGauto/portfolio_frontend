export class Proyecto {

    id? :number;
    nombreProyecto: string;
    fecha: number;
    descripcionProyecto: string;
    imgProyecto: string;

    constructor(nombreProyecto: string, fecha: number, descripcionProyecto: string, imgProyecto: string) {
        this.nombreProyecto = nombreProyecto;
        this.fecha = fecha;
        this.descripcionProyecto = descripcionProyecto;
        this.imgProyecto= imgProyecto;

    }





}
