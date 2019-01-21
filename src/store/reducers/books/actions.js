import * as types from './types'
export function set(book) {
  return {
    type: types.SET,
    payload: book,
  }
}
