import { Component, inject} from '@angular/core';
import { StoryListItem } from '../story-list-item/story-list-item';
import { StoriesService } from '../services/stories-service';

@Component({
  selector: 'app-stories-list',
  imports: [StoryListItem],
  templateUrl: './stories-list.html',
  styleUrl: './stories-list.scss',
  
})
export class StoriesList {
  private storiesService = inject(StoriesService);
  stories = this.storiesService.stories;
}
