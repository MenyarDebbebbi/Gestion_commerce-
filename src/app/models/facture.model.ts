import { Client } from './client.model';
import { Produit } from './produit.model';

export interface Facture {
  id?: number;
  numero: string;
  dateFacture: Date;
  montantTotal: number;
  client: Client;
  lignesFacture: LigneFacture[];
}

export interface LigneFacture {
  id?: number;
  produit: Produit;
  quantite: number;
  prixUnitaire: number;
  montantLigne: number;
}
