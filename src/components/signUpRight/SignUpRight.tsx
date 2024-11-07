import { Link } from 'react-router-dom'
import styles from './SignUpRight.module.scss'
import { useForm, SubmitHandler } from 'react-hook-form'

type Inputs = {
  firstName: string
  lastName: string
  emailAddress: string
  password: string
}

const SignUpRight = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  return (
    <section className={styles.signUpRight}>
      <div className={styles.signUpRight__container}>
        <div className={styles.signUpRight__container__header}>
          <h2>Create Account</h2>
          <p>Experience the best of local farms.</p>
        </div>
        <div className={styles.signUpRight__container__cta}>
          <p>Or with email</p>
        </div>
        <form
          className={styles.signUpRight__container__form}
          onSubmit={handleSubmit(onSubmit)}
          role="form"
        >
          <div className={styles.signUpRight__container__form__name}>
            <div className={styles.signUpRight__container__form__name__first}>
              <input
                {...register('firstName', { required: true })}
                type="text"
                name="firstName"
                id="firstName"
                placeholder="First Name"
              />
              {errors.firstName && <span>This field is required</span>}
            </div>

            <div className={styles.signUpRight__container__form__name__last}>
              <input
                {...register('lastName', { required: true })}
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Last Name"
              />
              {errors.lastName && <span>This field is required</span>}
            </div>
          </div>

          <div className={styles.signUpRight__container__form__email}>
            <input
              {...register('emailAddress', { required: true })}
              type="email"
              name="emailAddress"
              id="emailAddress"
              placeholder="Email"
            />
          </div>

          <div className={styles.signUpRight__container__form__password}>
            <input
              {...register('password', { required: true })}
              type="password"
              name="Password"
              id="password"
              placeholder="Password"
            />
          </div>

          <div className={styles.signUpRight__container__form__checkbox}>
            <input type="checkbox" />
            <p>
              By creating an account, you agreeing to our
              <span>Privacy Policy</span> <br /> with
              <span>Terms and Condition</span>
            </p>
          </div>
        </form>
        <p>
          Already have an account?
          <Link role="link" to="/sign-in">
            Sign In
          </Link>
        </p>
      </div>
    </section>
  )
}

export default SignUpRight
