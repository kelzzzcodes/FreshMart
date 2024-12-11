import styles from './SignUpImageSection.module.scss'
const SignUpImageSection = () => {
  return (
    <div data-testid="sign-up-left" className={styles.signUpImageSection}>
      <img
        src="./assets/signUpImage.png"
        alt="signUpBg"
        className={styles.signUpImageSection__bg}
      />
      <img
        src="./assets/signUpIcon.png"
        alt="signUpIcon"
        className={styles.signUpImageSection__icon}
      />
    </div>
  )
}

export default SignUpImageSection
