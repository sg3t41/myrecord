import React from 'react'
import Markdown from 'react-markdown'
import './App.css'
import { Button } from './components/Button/Button'
import remarkGfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism'

const mdtext = `A paragraph with *emphasis* and **strong importance**.

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

* Lists
* [ ] todo
* [x] done

A table:

| a | b |
| - | - |

~~~js
console.log('It works!')
~~~
`

export default function App() {
  function handleClick() {
    alert('clicked')
  }

  const CodeBlock = ({
    className,
    children,
    inline,
    ...props
  }: {
    inline?: boolean
    className?: string
    children?: React.ReactNode
  }) => {
    const match = /language-(\w+)/.exec(className || '')
    return !inline && match ? (
      <SyntaxHighlighter
        {...props}
        PreTag='div'
        children={String(children).replace(/\n$/, '')}
        language={match[1]}
        style={dark}
      />
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    )
  }

  return (
    <div className={'app__container'}>
      <div>Hello World</div>
      <Button label={'button'} bgcolor={'red'} onClick={handleClick} />
      <Markdown
        remarkPlugins={[remarkGfm]}
        components={{
          code: CodeBlock,
        }}>
        {mdtext}
      </Markdown>
    </div>
  )
}
