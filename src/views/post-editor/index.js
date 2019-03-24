import { PostEditor as Component } from './post-editor'
import { connector } from './connector'

export const PostEditor = connector(Component)
