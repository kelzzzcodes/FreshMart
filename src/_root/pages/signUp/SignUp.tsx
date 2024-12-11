import styles from './SignUp.module.scss'
import { SignUpImageSection,SignUpFormSection  } from '../../../components'

const SignUp = () => {
  return (
    <section data-testid="sign-up-section" className={styles.signUp}>
      <SignUpImageSection data-testid="sign-up-left" />
      <SignUpFormSection data-testid="sign-up-right" />
    </section>
  )
}

export default SignUp
