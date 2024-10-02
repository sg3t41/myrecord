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
