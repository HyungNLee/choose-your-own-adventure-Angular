import { Component, OnInit } from '@angular/core';
import { Story } from '../models/story.model';
import { StoryService } from '../story.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'app-story-page',
  templateUrl: './story-page.component.html',
  styleUrls: ['./story-page.component.css'],
  providers: [StoryService]
})
export class StoryPageComponent implements OnInit {

  constructor(private route: ActivatedRoute, private location: Location, private router: Router, private storyService: StoryService) { }
  stories: FirebaseListObservable<any[]>;
  story;
  storyId: string;

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.storyId = (urlParameters['id']);
      this.stories = this.storyService.getStories();
      // console.log(this.stories);
      // this.story = this.filterById(this.storyId);
      // console.log(this.story);
      // this.story = this.storyService.getStoryById(this.storyId);
      // console.log(this.story);
    });

    // console.log(JSON.stringify(this.storyService.getStories()));
  }

  // goToStoryPage(clickedStory: Story) {
  //   this.router.navigate(['story', clickedStory.id]);
  // }

  filterById(storyId: string) {
    let length = 0; 
    this.stories.subscribe( () => length++);
    for (let i = 0; i <= length - 1; i++) {
      if (this.stories[i].id === storyId) {
        return this.stories[i];
      }
    }
  }

}
