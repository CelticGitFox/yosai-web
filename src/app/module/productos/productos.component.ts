import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.sass']
})

export class ProductosComponent implements OnInit {
  public images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  constructor(
    private _fb: FormBuilder
  ) {

  }

  ngOnInit() {
  }
}
