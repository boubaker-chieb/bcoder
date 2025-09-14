import { Component, Input } from '@angular/core';
import { StoryModel } from '../models/storyModel';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-story-list-item',
  imports: [RouterLink],
  templateUrl: './story-list-item.html',
  styleUrl: './story-list-item.scss'
})
export class StoryListItem {
  @Input() 
  public story!: StoryModel;
   toDataUrl(story: StoryModel): string {
    return `data:${story.contentType};base64,${story.imageBase64}`;
  }
}
