```typescript
import './App.css'
import { Button } from './components/Button/Button'
import { MarkdownRenderer } from './components/Markdown/MarkdownRenderer'

export default function App() {
  function handleClick() {
    alert('clicked')
  }

  return (
    <div className={'app__container'}>
      <div>Hello World</div>
      <Button label={'button'} bgcolor={'red'} onClick={handleClick} />
      <MarkdownRenderer />
    </div>
  )
}
```

[!Note]
aa

| Header 1 | Header 2 |
| -------- | -------- |
| Row 1    | Row 1    |
| Row 2    | Row 2    |

~~This is strikethrough text~~

> This is a blockquote.

[GitHub]: https://github.com

[GitHub][github-link]

[github-link]: https://github.com

- Old line

* New line
