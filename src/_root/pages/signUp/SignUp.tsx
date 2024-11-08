import styles from './SignUp.module.scss'
import { SignUpLeft, SignUpRight } from '../../../components'

const SignUp = () => {
  return (
    <section data-testid="sign-up-section" className={styles.signUp}>
      <SignUpLeft data-testid="sign-up-left" />
      <SignUpRight data-testid="sign-up-right" />
    </section>
  )
}

export default SignUp
