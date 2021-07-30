# Angular Hateoas

## HATEOAS Concepts

Every API starts with a set of links to the various API endpoints:

```json
{
  "_links": {
    "issues": {
      "href": "http://example.com/issues"
    },
    "employees": {
      "href": "http://example.com/employees"
    }
  }
}
```

Clients should refer to links by name, such as `_links.issues.href` - if they follow that link, they'll see a list of issues:

```json
{
  "_embedded": {
    "issueList": [
      {
        "id": "039a486b-39df-496f-a32d-302cdb39fab7",
        "description": "get webflux working",
        "_links": {
          "self": {
            "href": "http://example.com/issues/039a486b-39df-496f-a32d-302cdb39fab7"
          }
        }
      },
      ...
    ]
  },
  "_links": {
    "self": {
      "href": "http://example.com/issues"
    }
  }
}
```

To follow the link to the first item, you might use `_embedded.issueList[0]._links.self.href`

## Angular Concepts

- Never ever use string concatenation to generate a server-side URL
- Load the root list of links in a parent resolver
- Cache the root list of links so you don't make two requests when components load
- Access resolver data from components or other resolvers
