import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
   standalone: true,
   imports: [CommonModule],
   selector: 'app-about-entry',
   template: `
      <h1>Tao là about</h1>
   `,
})
export class RemoteEntryComponent { }
