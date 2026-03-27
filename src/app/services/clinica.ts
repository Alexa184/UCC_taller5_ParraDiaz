import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ClinicaService {

  private url = 'http://localhost/clinica/archivar.php';

  constructor(private http: HttpClient) {}

  // PACIENTES
  crearPaciente(datos: any) {
    return this.http.post(this.url, { ...datos, accion: 'crear_paciente' });
  }
  listarPacientes() {
    return this.http.post(this.url, { accion: 'listar_pacientes' });
  }
  actualizarPaciente(datos: any) {
    return this.http.post(this.url, { ...datos, accion: 'actualizar_paciente' });
  }
  eliminarPaciente(id: number) {
    return this.http.post(this.url, { id, accion: 'eliminar_paciente' });
  }

  // VISITAS
  crearVisita(datos: any) {
    return this.http.post(this.url, { ...datos, accion: 'crear_visita' });
  }
  listarVisitas() {
    return this.http.post(this.url, { accion: 'listar_visitas' });
  }
  actualizarVisita(datos: any) {
    return this.http.post(this.url, { ...datos, accion: 'actualizar_visita' });
  }
  eliminarVisita(id: number) {
    return this.http.post(this.url, { id, accion: 'eliminar_visita' });
  }
}
