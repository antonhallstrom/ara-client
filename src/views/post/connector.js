import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const md = `
# Syntax


## Table of contents

- [Introduction](#introduction)
- [Paragraphs](#paragraphs)
- [Headings](#headings)
    * [Atx Style](#atx-style)
    * [Setext style](#setext-style)
    * [Header IDs](#header-ids)
- [Blockquotes](#blockquotes)
- [Bold and Italic](#bold-and-italic)
- [Strikethrough](#strikethrough)
- [Emojis](#emojis)
- [Code formatting](#code-formatting)
    * [Inline formats](#inline-formats)
    * [Multiple lines](#multiple-lines)
<br/>
\`\`\`js
  var x = 10;

  function fooBarBaz(x, y, z) {
    return x * y / z;
  }
\`\`\`
`

function mapStateToProps(state) {
  return {
    title: 'Foo bar baz',
    subtitle: 'Foo bar baz',
    text: md,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch)
}

export const connector = connect(
  mapStateToProps,
  mapDispatchToProps
)
