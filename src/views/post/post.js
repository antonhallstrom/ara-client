import React from 'react'
import { Markdown } from 'react-showdown'

const md = `
Showdown is a Javascript Markdown to HTML converter, based on the original works by John Gruber. It can be used client side (in the browser) or server side (with Node or io). 


# Installation

## Download tarball

You can download the latest release tarball directly from [releases][releases]

## Bower

    bower install showdown

## npm (server-side)

    npm install showdown

## CDN

You can also use one of several CDNs available: 
`

export function Post(props) {
  return (
    <div>
      <Markdown markup={md} />
    </div>
  )
}
