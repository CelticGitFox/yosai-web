import {Component, OnInit} from '@angular/core';
import {AppBase} from '../../app-base';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-layout-home',
  templateUrl: './layout-home.component.html',
  styleUrls: ['./layout-home.component.sass']
})
export class LayoutHomeComponent extends AppBase implements OnInit {
  public url = null;

  constructor(public translate: TranslateService) {
    super();
    if (this.idioma == null || !this.idioma) {
      localStorage.setItem('idioma', 'en');
    }

    this.translate.use(this.idioma);
  }

  ngOnInit() {
    this.url = window.location.pathname;
  }

  public changeLenguaje(value: string) {
    this.idioma = value;
    localStorage.setItem('idioma', value);

    this.translate.use(value);
  }
}
