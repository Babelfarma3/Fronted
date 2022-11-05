export interface Cliente {
    id: number;
    dni: number;
    nombres: string;
    apellidoPaterno: string;
    apellidoMaterno: string;
    sexo: string;
    correo: string;
    celular: number;
    fechaNacimiento: Date;
    direccion: string;
    distrito: any;
}