import React from 'react'
import styles from './LandingHero.module.scss'
import { landingHeroLeftItems } from '../../constant'

const LandingHero = () => {
  return (
    <section className={styles.landingHero}>
      <div className={styles.landingHero__left}>
        <h1>
          Fresh From Our Farm To Your <span>Table</span>
        </h1>
        <p>
          Experience the best of local farms, delivered directly to your <br />
          doorstep
        </p>
        <ul>
          {landingHeroLeftItems.map((item) => (
            <li key={item.label}>
              <img src={item.icon} />
              {item.label}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.landingHero__right}>
        <img src="./assets/heroImage.png" />
      </div>
    </section>
  )
}

export default LandingHero
