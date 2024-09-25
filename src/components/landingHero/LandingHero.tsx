import React from 'react'
import styles from './LandingHero.module.scss'
import Button from '../ui/button/Button'
import { landingHeroLeftItems } from '../../constant'

const LandingHero = () => {
  return (
    <section className={styles.landingHero}>
      <div className={styles.landingHero__left}>
        {/* Left side content */}
        <h1>
          Fresh From Our Farm To Your <span>Table</span>
        </h1>
        <p>
          Experience the best of local farms, delivered directly to your <br />
          doorstep
        </p>
        {/* <div>
          <Button text='Shop Now' customStyle={styles.heroButton} textStyle={styles.heroButton__text}/>
        </div> */}
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
        {/* Right side content */}
        <img src="./assets/heroImage.png" />
      </div>
    </section>
  )
}

export default LandingHero
