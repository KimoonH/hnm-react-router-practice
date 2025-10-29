import { useNavigate } from "react-router-dom"

const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`/product/${item.id}`);
  }
  return (
      <div onClick={showDetail}>
          <img width={250} src={item?.img} alt={item?.title || "상품 이미지"} />
          <div>{item?.choice === true ? "Conscious choice" : ""}</div>
          <div>{item?.title}</div>
          <div>₩{item?.price}</div>
          <div>{item?.new === true? "신제품":""}</div>
      </div>
  )
}

export default ProductCard