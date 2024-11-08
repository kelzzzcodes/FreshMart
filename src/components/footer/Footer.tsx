import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <footer data-testid="footer" className={styles.footer}>
      <img src="./assets/footerStroke.png" alt="footerStroke" />
      <div className={styles.footer__container}>
        <h3>The Best spot for all your fresh buys</h3>
      </div>
    </footer>
  )
}

export default Footer
