type EntityModel<T> = {
  _links: {
    [key: string]: {
      href: string
    }
  },
} & T

export default EntityModel;
