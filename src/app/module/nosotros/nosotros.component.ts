import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.sass']
})

export class NosotrosComponent implements OnInit {
  public images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  constructor(
    private _fb: FormBuilder
  ) {

  }

  ngOnInit() {
  }
}
