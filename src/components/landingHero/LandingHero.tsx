import React from 'react'
import styles from './LandingHero.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import { landingHeroCardItems, landingHeroLeftItems } from '../../constant'

const LandingHero = () => {
  return (
    <section className={styles.landingHero}>
      <div className={styles.landingHero__top}>
        <div className={styles.left}>
          <h1>
            Fresh From Our Farm To Your <span>Table</span>
          </h1>
          <p>
            Experience the best of local farms, delivered directly to your{' '}
            <br />
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
        <div className={styles.right}>
          <img src="./assets/heroImage.png" alt="Hero image" />
        </div>
      </div>

      <div className={styles.landingHero__bottom}>
        <Swiper
          modules={[Pagination, A11y]}
          spaceBetween={50}
          slidesPerView={4}
          pagination={{ clickable: true }}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 4,
            },
          }}
          // style={{

          //   '--swiper-pagination-color': '#FFBA08',
          //   '--swiper-pagination-bullet-inactive-color': '#999999',
          //   '--swiper-pagination-bullet-inactive-opacity': '1',
          //   '--swiper-pagination-bullet-size': '16px',
          //   '--swiper-pagination-bullet-horizontal-gap': '10px',

          // }}
        >
          {landingHeroCardItems.map((item) => (
            <SwiperSlide key={item.key}>
              <div className={styles.carousel}>
                <img src={item.icon} />
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default LandingHero
