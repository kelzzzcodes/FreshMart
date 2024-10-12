import React from 'react'
import styles from './PersonalisedRecommendation.module.scss'

const PersonalisedRecommendation = () => {
  return (
    <section role="region" className={styles.personalisedRecommendation}>
      <div className={styles.personalisedRecommendation__container}>
        <h2>Your Smart Farm Shopping Companion</h2>
        <p>
          Get personalized farm-to-table recommendations, track your deliveries,
          and discover recipes, all with the help of our AI assistant
        </p>
      </div>

      <img src="/assets/personalisedStroke.svg" alt="Personalized Icon" />
    </section>
  )
}

export default PersonalisedRecommendation
