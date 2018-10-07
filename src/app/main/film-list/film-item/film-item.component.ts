import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-film-item',
  templateUrl: './film-item.component.html',
  styleUrls: ['./film-item.component.scss']
})
export class FilmItemComponent implements OnInit {

  @Input() title: string;
  @Input() description: string;
  @Input() link: string;

  constructor() { }

  ngOnInit() {
  }

}
