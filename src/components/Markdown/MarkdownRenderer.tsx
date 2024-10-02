import './MarkdownRenderer.css'
import { useLayoutEffect, useState } from 'react'
import Markdown from 'react-markdown'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { dark } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import remarkGfm from 'remark-gfm'

/**
 * Markdown形式のデータをhtmlに変換する
 * */
export const MarkdownRenderer = () => {
  const [md, setMd] = useState<string | null>(null)
  // mdファイルの取得
  useLayoutEffect(() => {
    fetch(`/test.md`)
      .then(m => m.text())
      .then(md => setMd(md))
      .catch(e => console.error(e))

    console.log(md)
  }, [md])

  // CodeBlockのシンタックスハイライト設定用コンポーネント
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
    <Markdown
      className={'reactMarkDown'}
      remarkPlugins={[remarkGfm]}
      components={{
        code: CodeBlock,
      }}>
      {md}
    </Markdown>
  )
}
