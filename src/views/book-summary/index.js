import { BookSummary as Component } from './book-summary'
import { connector } from './connector'

export const BookSummary = connector(Component)
