import { Component, OnInit } from '@angular/core';
import { Story } from '../models/story.model';
import { StoryService } from '../story.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-story-page',
  templateUrl: './story-page.component.html',
  styleUrls: ['./story-page.component.css'],
  providers: [StoryService]
})
export class StoryPageComponent implements OnInit {

  constructor(private route: ActivatedRoute, private location: Location, private router: Router, private storyService: StoryService) { }

  story: Story;
  storyId: string;

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.storyId = (urlParameters['id']);
      this.story = this.storyService.getStoryById(this.storyId);
    });
  }

  goToStoryPage(clickedStory: Story) {
    this.router.navigate(['story', clickedStory.id]);
  }

}
