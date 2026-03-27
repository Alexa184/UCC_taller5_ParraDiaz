import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ClinicaService } from '../services/clinica';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class HomePage implements OnInit {

  paciente = { nombre: '', fecha_nacimiento: '', genero: '' };
  visita = { id_paciente: '', fecha_visita: '', medico: '', medicamentos: '' };
  editPaciente = { id: '', nombre: '', fecha_nacimiento: '', genero: '' };
  editVisita = { id: '', fecha_visita: '', medico: '', medicamentos: '' };

  pacientes: any[] = [];
  visitas: any[] = [];
  mensaje = '';

  constructor(private clinica: ClinicaService) {}

  ngOnInit() {
    this.cargarPacientes();
    this.cargarVisitas();
  }

  cargarPacientes() {
    this.clinica.listarPacientes().subscribe((res: any) => this.pacientes = res);
  }
  cargarVisitas() {
    this.clinica.listarVisitas().subscribe((res: any) => this.visitas = res);
  }

  guardarPaciente() {
    this.clinica.crearPaciente(this.paciente).subscribe(() => {
      this.mensaje = 'Paciente guardado';
      this.paciente = { nombre: '', fecha_nacimiento: '', genero: '' };
      this.cargarPacientes();
    });
  }
  guardarVisita() {
    this.clinica.crearVisita(this.visita).subscribe(() => {
      this.mensaje = 'Visita guardada';
      this.visita = { id_paciente: '', fecha_visita: '', medico: '', medicamentos: '' };
      this.cargarVisitas();
    });
  }
  actualizarPaciente() {
    this.clinica.actualizarPaciente(this.editPaciente).subscribe(() => {
      this.mensaje = 'Paciente actualizado';
      this.cargarPacientes();
    });
  }
  actualizarVisita() {
    this.clinica.actualizarVisita(this.editVisita).subscribe(() => {
      this.mensaje = 'Visita actualizada';
      this.cargarVisitas();
    });
  }
  eliminarPaciente(id: number) {
    this.clinica.eliminarPaciente(id).subscribe(() => {
      this.mensaje = 'Paciente eliminado';
      this.cargarPacientes();
    });
  }
  eliminarVisita(id: number) {
    this.clinica.eliminarVisita(id).subscribe(() => {
      this.mensaje = 'Visita eliminada';
      this.cargarVisitas();
    });
  }
}