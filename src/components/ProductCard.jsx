import { useNavigate } from "react-router-dom"

const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`/product/${item.id}`);
  }
  return (
      <div className="product-card" onClick={showDetail}>
          <div className="product-img-wrapper">
            <img src={item?.img} alt={item?.title || "상품 이미지"} />
            {item?.new === true && (
              <span className="product-badge new-badge">신제품</span>
            )}
          </div>
          <div className="product-info">
            {item?.choice === true && (
              <div className="conscious-choice">Conscious choice</div>
            )}
            <div className="product-title">{item?.title}</div>
            <div className="product-price">₩{item?.price?.toLocaleString()}</div>
          </div>
      </div>
  )
}

export default ProductCard