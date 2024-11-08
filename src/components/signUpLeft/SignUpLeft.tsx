import styles from './SignUpLeft.module.scss'
const SignUpLeft = () => {
  return (
    <div data-testid="sign-up-left" className={styles.signUpLeft}>
      <img
        src="./assets/signUpImage.png"
        alt="signUpBg"
        className={styles.signUpLeft__bg}
      />
      <img
        src="./assets/signUpIcon.png"
        alt="signUpIcon"
        className={styles.signUpLeft__icon}
      />
    </div>
  )
}

export default SignUpLeft
