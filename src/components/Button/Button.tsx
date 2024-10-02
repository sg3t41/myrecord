//import styles from './Button.module.css'
import './Button.css'

export const Button = ({
  label,
  bgcolor,
  onClick,
}: {
  label: string
  bgcolor: 'red' | 'blue'
  onClick: () => void
}) => {
  const bg = `button__bg--${bgcolor}`
  return (
    <button className={bg} onClick={onClick}>
      {label}
    </button>
  )
}
