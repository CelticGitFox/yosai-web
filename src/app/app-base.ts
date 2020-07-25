export class AppBase {
  public idioma = null;

  constructor() {
    this.initStorage();
  }

  initStorage() {
    this.idioma = localStorage.getItem('idioma');

    if (this.idioma === null) {
      this.idioma = 'en';
      localStorage.setItem('idioma', this.idioma);
    }
  }
}
