import styles from './InputField.module.scss'
import { UseFormRegister } from 'react-hook-form'

type InputFieldProps = {
  type: string
  placeholder?: string
  name: string
  register: UseFormRegister<any>
  error?: string
}

const InputField = ({
  type,
  placeholder,
  name,
  register,
  error,
  ...props
}: InputFieldProps) => {
  return (
    <div className={styles.inputField}>
      <input
        {...register(name)}
        type={type}
        name={name}
        placeholder={placeholder}
        aria-invalid={!!error}
        aria-describedby={`${name}-error`}
        {...props}
        className={styles.inputField__inputs}
      />
      {type !== 'checkbox' && error && (
        <span id={`${name}-error`} className={styles.inputField__error}>
          {error}
        </span>
      )}
    </div>
  )
}

export default InputField
