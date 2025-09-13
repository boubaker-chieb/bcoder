import { Component, signal, WritableSignal } from '@angular/core';
import { StoryListItem } from '../story-list-item/story-list-item';
import { StoryModel } from '../models/storyModel';

@Component({
  selector: 'app-stories-list',
  imports: [StoryListItem],
  templateUrl: './stories-list.html',
  styleUrl: './stories-list.scss',
  
})
export class StoriesList {
  public stories : WritableSignal<StoryModel[]> = signal([
  
  ]);
}
