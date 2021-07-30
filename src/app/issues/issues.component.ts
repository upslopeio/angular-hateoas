import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import CollectionModel from '../collection-model';
import Issue from './issue';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.scss']
})
export class IssuesComponent implements OnInit {
  issues?: CollectionModel<Issue>;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data) => {
      this.issues = data.issues;
    });
  }

}
