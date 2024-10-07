import styles from './FeaturedProducts.module.scss'
import { ProductCard } from '../ui'
import { featuredProductsCardItems } from '../../data'

const FeaturedProducts = () => {
  return (
    <section
      data-testid="featured-products"
      className={styles.featuredProducts}
    >
      <h2>Featured Products</h2>
      <div data-testid="product-card" className={styles.featuredProducts__card}>
        {featuredProductsCardItems.map((item) => (
          <ProductCard
            key={item.key}
            id={item.key}
            imageUrl={item.imageUrl}
            oldPrice={item.oldPrice}
            newPrice={item.newPrice}
            label={item.label}
          />
        ))}
      </div>
    </section>
  )
}

export default FeaturedProducts
