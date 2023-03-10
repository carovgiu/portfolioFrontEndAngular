import { Component } from '@angular/core';
import { faGithub, faHtml5, faCss3, faJs, faAngular, faJava } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolioArgentinaPrograma';
  faGithub = faGithub;
  faHtml5 = faHtml5;
  faCss3 = faCss3;
  faJs = faJs;
  faAngular = faAngular;
  faJava = faJava;
}
