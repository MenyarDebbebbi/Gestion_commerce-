import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reglements',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reglements.component.html',
  styleUrls: ['./reglements.component.css'],
})
export class ReglementsComponent {
  reglements = [
    {
      id: 1,
      reference: 'REG-2024-001',
      date: '2024-03-20',
      facture: { numero: 'FAC-2024-001', client: 'Dupont Jean' },
      montant: 1059.97,
      mode: 'Carte bancaire',
    },
  ];
}
