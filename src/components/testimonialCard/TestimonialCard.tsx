import React from 'react'
import styles from './TestimonialCard.module.scss'

interface TestimonialCardProps {
  imageSrc: string
  name: string
  rating: number
  description: string
}

const TestimonialCard = ( {imageUrl, label,ratng}) => {
  return (
    <div className={styles.testimonialCard}>
      <div className={styles.testimonialCard__top}>
        <img  src='' alt="cardImage" />
        <ul>
          <li>name</li>
          <li>rating</li>
        </ul>
      </div>
      <p>descrition</p>
    </div>
  )
}

export default TestimonialCard
