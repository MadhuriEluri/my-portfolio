import { Component, OnInit } from '@angular/core';
import { landingData } from '../shared/data';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  modellingApps = landingData.featureCardsSection.cards;

  constructor() { }

  ngOnInit() {
  }

}
