export interface HousingLocation {
  idInmueble: number;
  nombre: string;
  tipo: string;
  descripcion: string;
  imagen: string;
  direccion: string;
  precioNoche: number;
  nroHabitaciones: number;
  capacidad_Max: number;
  serviciosAdicionales: string[];
  ciudad: string;
  idAnfitrion: number;
}