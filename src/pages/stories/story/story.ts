import { Component, effect, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { PageTitle } from '../../../shared/pageTitle/pageTitle';
import { ActivatedRoute } from '@angular/router';
import { StoriesService } from '../services/stories-service';
import { StoryModel } from '../models/storyModel';

@Component({
  selector: 'app-story',
  imports: [PageTitle],
  templateUrl: './story.html',
  styleUrl: './story.scss',
})
export class Story implements OnInit {
  private route = inject(ActivatedRoute);
  private storiesService = inject(StoriesService);

  public story: WritableSignal<StoryModel | undefined> = signal(undefined);

  ngOnInit() {
    const storyId = this.route.snapshot.paramMap.get('id');
    if (storyId) {
      this.storiesService.getStoryById(storyId).then((story) => {
          this.story.set(story);
      });
    }
  }

  constructor() {
    
  }
}
