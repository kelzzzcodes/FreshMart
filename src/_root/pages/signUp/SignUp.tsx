import styles from './SignUp.module.scss'
import { SignUpLeft, SignUpRight } from '../../../components'

const SignUp = () => {
  return (
    <section className={styles.signUp}>
      <div className={styles.signUp__left}>
        <SignUpLeft />
      </div>
      <div className={styles.signUp__right}>
        <SignUpRight />
      </div>
    </section>
  )
}

export default SignUp
