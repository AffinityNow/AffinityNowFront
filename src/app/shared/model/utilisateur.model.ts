export class Utilisateur {
  private pseudo: string;

  get getPseudo(): string {
    return this.pseudo;
  }
  set setPseudo(value: string) {
    this.pseudo = value;
  }

  constructor( pseudo: string) {
    this.pseudo = pseudo;
  }
}
