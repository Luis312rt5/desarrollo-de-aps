import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  @Output() productoAgregado = new EventEmitter<any>();

  name: string = '';
  value: number = 0;
  cant: number = 0;

  agregarProducto() {
    if (!this.name || this.value <= 0 || this.cant <= 0) return;

    const producto = {
      name: this.name,
      value: this.value,
      cant: this.cant,
      valor_producto: this.value * this.cant
    };

    this.productoAgregado.emit(producto);

    this.name = '';
    this.value = 0;
    this.cant = 0;
  }
}
