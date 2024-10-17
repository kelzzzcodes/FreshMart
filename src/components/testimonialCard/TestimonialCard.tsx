import React from 'react'
import styles from './TestimonialCard.module.scss'

interface TestimonialCardProps {
  imageUrl: string
  name: string
  description: string
}

const TestimonialCard = ({
  imageUrl,
  name,
  description,
}: TestimonialCardProps) => {
  return (
    <div className={styles.testimonialCard}>
      <div className={styles.testimonialCard__top}>
        <img src={imageUrl} alt={name}/>
        <ul>
          <li>{name}</li>
        </ul>
      </div>
      <p>{description}</p>
    </div>
  )
}

export default TestimonialCard
