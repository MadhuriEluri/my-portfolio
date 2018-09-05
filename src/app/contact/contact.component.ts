import { Component, OnInit } from '@angular/core';
import { landingData } from '../shared/data';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contacts = landingData.featureCardsSection.cards;

  constructor() { }

  ngOnInit() {
  }

}
