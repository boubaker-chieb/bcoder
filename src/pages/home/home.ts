import { Component } from '@angular/core';
import { Keyskills } from './keyskills/keyskills';
import { Intro } from './intro/intro';
import { Logo } from '../../core/logo/logo';

@Component({
  selector: 'app-home',
  imports: [Logo, Keyskills, Intro],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
