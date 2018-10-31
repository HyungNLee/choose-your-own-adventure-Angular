import { Injectable } from '@angular/core';
import { Story } from './models/story.model';
import { STORIES } from './mock-data';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class StoryService {

  stories: FirebaseListObservable<any[]>;
  item;

  constructor(private database: AngularFireDatabase) {
    this.stories = this.database.list('story');
  }

  getStories() {
    return this.stories;
  }

  getStoryById(storyId: string) {
    // return STORIES.find(story => story.id === storyId);

    let length = 0;
    this.stories.subscribe(element => length ++);
    // return this.item = this.database.object(`/story/${storyId}`);

    for (let i = 0; i <= length - 1; i++) {
      if (STORIES[i].id === storyId) {
        return STORIES[i];
      }
    }
  }
}
