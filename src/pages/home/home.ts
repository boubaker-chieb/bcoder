import { Component } from '@angular/core';
import { Keyskills } from './keyskills/keyskills';
import { Intro } from './intro/intro';
import { PageTitle } from '../../core/pageTitle/pageTitle';
import { DownloadCV } from './download-cv/download-cv';

@Component({
  selector: 'app-home',
  imports: [PageTitle, Keyskills, Intro, DownloadCV],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
