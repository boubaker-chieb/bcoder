import { Component } from '@angular/core';
import { Keyskills } from './keyskills/keyskills';
import { Intro } from './intro/intro';
import { PageTitle } from '../../core/pageTitle/pageTitle';

@Component({
  selector: 'app-home',
  imports: [PageTitle, Keyskills, Intro],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
