import { Blog as Component } from './blog'
import { connector } from './connector'

export const Blog = connector(Component)
