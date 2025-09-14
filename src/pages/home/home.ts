import { Component } from '@angular/core';
import { Keyskills } from './keyskills/keyskills';
import { Intro } from './intro/intro';
import { DownloadCV } from './download-cv/download-cv';
import { PageTitle } from '../../shared/pageTitle/pageTitle';

@Component({
  selector: 'app-home',
  imports: [PageTitle, Keyskills, Intro, DownloadCV],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
