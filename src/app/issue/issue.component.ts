import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import EntityModel from '../entity-model';
import Issue from '../issues/issue';

@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.scss']
})
export class IssueComponent implements OnInit {

  issue?: EntityModel<Issue>;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data) => {
      this.issue = data.issue;
    });
  }

}
