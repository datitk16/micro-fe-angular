import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-cart-entry',
  template: `
  <h1>Tao là cart</h1>
  `,
})
export class RemoteEntryComponent { }
