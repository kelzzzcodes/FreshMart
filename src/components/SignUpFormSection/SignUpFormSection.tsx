import { Link, useNavigate } from 'react-router-dom'
import styles from './SignUpFormSection.module.scss'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useState } from 'react'
import { Button, InputField } from '../ui'

type Inputs = {
  firstName: string
  lastName: string
  emailAddress: string
  password: string
}

const SignUpFormSection = () => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()

  const [message, setMessage] = useState<string | null>(null)

  const mockApiCall = (data: Inputs): Promise<Inputs> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (data.emailAddress === 'fail@example.com') {
          reject('Failed to submit')
        } else {
          resolve(data)
        }
      }, 1000)
    })
  }

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const result = await mockApiCall(data)
      setMessage('Successful!')
      setTimeout(() => {
        localStorage.setItem('user', JSON.stringify(result))
        navigate('/')
      }, 2000)
    } catch (error) {
      setMessage('Unsuccessful!')
      setTimeout(() => {
        setMessage(null)
      }, 2000)
    }
  }

  return (
    <section data-testid="sign-up-right" className={styles.signUpFormSection}>
      <div className={styles.signUpFormSection__container}>
        <div className={styles.signUpFormSection__container__header}>
          <h2>Create Account</h2>
          <p>Experience the best of local farms.</p>
        </div>
        <div className={styles.signUpFormSection__container__cta}>
          <p>Or with email</p>
        </div>
        <form
          className={styles.signUpFormSection__container__form}
          onSubmit={handleSubmit(onSubmit)}
          role="form"
        >
          {message && <p>{message}</p>}
          <div className={styles.signUpFormSection__container__form__name}>
            <InputField
              type="text"
              name="firstName"
              placeholder="First Name"
              register={register}
            />

            <InputField
              type="text"
              name="lastName"
              placeholder="Last Name"
              register={register}
            />
          </div>

          <InputField
            type="email"
            name="emailAddress"
            placeholder="Email"
            register={register}
          />

          <InputField
            type="password"
            name="password"
            placeholder="Password"
            register={register}
          />

          <div className={styles.signUpFormSection__container__form__checkbox}>
            <InputField type="checkbox" name="terms" register={register} />
            <p>
              By creating an account, you agreeing to our {''}
              <span>Privacy Policy</span> <br /> with
              <span>Terms and Condition</span>
            </p>
          </div>

          <div className={styles.signUpFormSection__container__form__submit}>
            <Button text="Sign Up" />
          </div>
        </form>
        <p>
          Already have an account? {''}
          <Link role="link" to="/sign-in">
            Sign In
          </Link>
        </p>
      </div>
    </section>
  )
}

export default SignUpFormSection
