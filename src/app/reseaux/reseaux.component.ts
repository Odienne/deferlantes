import {Component, OnInit} from '@angular/core';

import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {faFacebookF } from '@fortawesome/free-brands-svg-icons'
import {faTwitter } from '@fortawesome/free-brands-svg-icons'
import {faInstagram } from '@fortawesome/free-brands-svg-icons'
import {faYoutube } from '@fortawesome/free-brands-svg-icons'
import {faSpotify } from '@fortawesome/free-brands-svg-icons'

@Component({
  selector: 'app-reseaux',
  templateUrl: './reseaux.component.html',
  styleUrls: ['./reseaux.component.scss']
})
export class ReseauxComponent implements OnInit {

  faEnvelope = faEnvelope;
  faFacebookF = faFacebookF;
  faTwitter = faTwitter;
  faInstagram = faInstagram;
  faYoutube = faYoutube;
  faSpotify = faSpotify;

  constructor() {
  }

  ngOnInit(): void {
  }

}
