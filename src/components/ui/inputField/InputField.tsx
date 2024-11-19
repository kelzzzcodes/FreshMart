import styles from './InputField.module.scss'

type InputFieldProps = {
  type: string
  placeholder?: string
  name: string
  register: any
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
  const manualError = 'Wrong credentials have been passed'

  return (
    <div className={styles.inputField}>
      <input
        {...register(name)}
        type={type}
        name={name}
        placeholder={placeholder}
        {...props}
        className={styles.inputField__inputs}
      />
      {type !== 'checkbox' && (error || manualError) && (
        <span className={styles.inputField__error}>{error || manualError}</span>
      )}
    </div>
  )
}

export default InputField
