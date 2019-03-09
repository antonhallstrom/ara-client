import * as R from 'ramda'

export function clamp(text, max = 134, min = 0) {
  const ellipsis = '...'
  const length = R.clamp(min, max, text.length)
  const truncated = R.slice(0, max - ellipsis.length, text)

  return length >= max - ellipsis.length
    ? R.concat(truncated, ellipsis)
    : truncated
}
