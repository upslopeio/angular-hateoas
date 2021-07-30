import EntityModel from "./entity-model";

type CollectionModel<T> = {
  _links: {
    [key: string]: {
      href: string
    }
  },
  _embedded: {
    [key: string]: Array<EntityModel<T>>
  }
}

export default CollectionModel;
