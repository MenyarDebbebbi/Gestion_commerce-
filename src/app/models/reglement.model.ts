import { Facture } from './facture.model';

export interface Reglement {
  id?: number;
  reference: string;
  dateReglement: Date;
  montant: number;
  modeReglement: string;
  facture: Facture;
}
