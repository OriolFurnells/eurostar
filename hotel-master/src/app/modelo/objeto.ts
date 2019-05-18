export class Objeto{ 
    constructor(

        public _id: string,
        public ciudadOrigen: string,
        public ciudadDestino: string,
        public horaOrigen: string,
        public horaLlegada: string,
        public fechaLlegada: string,
        public fechaOrigen: string,
        public pasajeros: number,
    ){}

}