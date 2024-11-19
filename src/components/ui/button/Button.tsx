import styles from './Button.module.scss'
import { Link } from 'react-router-dom'

type ButtonProps = {
  text?: string
  imageSrc?: string
  altText?: string
  onClick?: () => void
  to?: string
  className?: string
}

const Button = ({
  text,
  imageSrc,
  altText,
  onClick,
  to,
  className = '',
}: ButtonProps) => {
  const content = (
    <>
      {imageSrc && <img src={imageSrc} alt={altText} />}
      {text && <span>{text}</span>}
    </>
  )

  return to ? (
    <Link to={to} className={`${styles.button} ${className}`}>
      {content}
    </Link>
  ) : (
    <button onClick={onClick} className={`${styles.button} ${className}`}>
      {content}
    </button>
  )
}

export default Button
