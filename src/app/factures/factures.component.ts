import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-factures',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './factures.component.html',
  styleUrls: ['./factures.component.css'],
})
export class FacturesComponent {
  factures = [
    {
      id: 1,
      numero: 'FAC-2024-001',
      date: '2024-03-20',
      client: { nom: 'Dupont Jean', id: 1 },
      produits: [
        { nom: 'Ordinateur portable', quantite: 1, prix: 999.99 },
        { nom: 'Souris sans fil', quantite: 2, prix: 29.99 },
      ],
      total: 1059.97,
    },
  ];
}
