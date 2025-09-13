import { Component, Input } from '@angular/core';
import { StoryModel } from '../models/storyModel';

@Component({
  selector: 'app-story-list-item',
  imports: [],
  templateUrl: './story-list-item.html',
  styleUrl: './story-list-item.scss'
})
export class StoryListItem {
  @Input() 
  public story!: StoryModel;
}
