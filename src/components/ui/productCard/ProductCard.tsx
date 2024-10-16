import styles from './ProductCard.module.scss'

interface ProductCardProps {
  id: string
  imageUrl: string
  label: string
  oldPrice: number
  newPrice?: number
}
const ProductCard = ({
  id,
  imageUrl,
  label,
  oldPrice,
  newPrice,
}: ProductCardProps) => {
  return (
    <div data-testid="product-card-item" className={styles.productCard}>
      <img src={imageUrl} alt={id} />

      <div className={styles.productCard__content}>
        <div className={styles.productCard__content__left}>
          <div className={styles.productCard__content__left__pricing}>
            <p>{oldPrice}</p>
            <span>{newPrice}</span>
          </div>
          <p>{label}</p>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
