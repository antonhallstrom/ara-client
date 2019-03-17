import { Post as Component } from './post'
import { connector } from './connector'

export const Post = connector(Component)
