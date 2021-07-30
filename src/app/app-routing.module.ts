import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IssueComponent } from './issue/issue.component';
import { IssueResolver } from './issue/issue.resolver';
import { IssuesComponent } from './issues/issues.component';
import { IssuesResolver } from './issues/issues.resolver';
import { RootResolver } from './root.resolver';

const routes: Routes = [
  {
    path: '',
    resolve: {
      links: RootResolver,
    },
    children: [
      {
        path: 'issues',
        component: IssuesComponent,
        resolve: {
          issues: IssuesResolver,
        },
      },
      {
        path: 'issues/:id',
        component: IssueComponent,
        resolve: {
          issue: IssueResolver,
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
