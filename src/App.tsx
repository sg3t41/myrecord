import styles from './App.module.css'
import { Button } from './components/Button/Button'

export default function App() {
  function handleClick() {
    alert('clicked')
  }
  return (
    <div className={styles.container}>
      <div>Hello World</div>
      <Button label={'button'} bgcolor={'red'} onClick={handleClick} />
    </div>
  )
}
