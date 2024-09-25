import React from 'react'
import styles from './Button.module.scss'

interface ButtonProps {
  text?: string
  imageSrc?: string
  customStyle?: string
  imageStyle?: string
  textStyle?: string
}

const Button = ({
  text,
  imageSrc,
  customStyle,
  imageStyle,
  textStyle,
}: ButtonProps) => {
  return (
    <button className={`${styles.button} ${customStyle}`}>
      {imageSrc && <img src={imageSrc} alt="" className={`{imageStyle}`} />}
      {text && <span className={` ${styles.text} ${textStyle}`}>{text}</span>}
    </button>
  )
}

export default Button
