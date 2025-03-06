import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recibo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recibo.component.html',
  styleUrls: ['./recibo.component.css']
})
export class ReciboComponent implements OnChanges {
  @Input() productos: any[] = [];
  total: number = 0;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['productos']) {
      this.calcularTotal();
    }
  }

  calcularTotal() {
    this.total = this.productos.reduce((acc, prod) => acc + prod.valor_producto, 0);
  }

  eliminarProducto(index: number) {
    this.productos.splice(index, 1);
    this.productos = [...this.productos];
    this.calcularTotal();
  }
}
