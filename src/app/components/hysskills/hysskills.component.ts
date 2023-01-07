import { Component } from '@angular/core';
import { faGithub, faHtml5, faCss3, faJs, faAngular, faJava } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-hysskills',
  templateUrl: './hysskills.component.html',
  styleUrls: ['./hysskills.component.css']
})
export class HysskillsComponent {
  faGithub = faGithub;
  faHtml5 = faHtml5;
  faCss3 = faCss3;
  faJs = faJs;
  faAngular = faAngular;
  faJava = faJava;
}
