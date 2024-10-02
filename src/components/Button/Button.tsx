import styles from './Button.module.css'

const Button = ({
  label,
  bgcolor,
  onClick,
}: {
  label: string
  bgcolor: 'red' | 'blue'
  onClick: () => void
}) => {
  const bg = `bg--${bgcolor}`
  return (
    <button className={styles[bg]} onClick={onClick}>
      {label}
    </button>
  )
}

export default Button
