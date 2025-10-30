import { useEffect, useState } from 'react'
import { Container, Row, Col, Form } from "react-bootstrap";
import { useParams } from "react-router-dom"

const ProductDetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState(null);

  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/KimmonH/hnm-react-router-practice/products/${id}`
    let response = await fetch(url);
    let data = await response.json();
    setProduct(data);

  }
  useEffect(() => {
    getProductDetail();
  },[])
  return (
    <Container>
      <Row>
        <Col className="product-img">
          <img src={product?.img} alt={product?.title || "상품 이미지"} />
        </Col>
        <Col className="product-detail-info">
          <h2>{product?.title}</h2>
          <div className="price">₩{product?.price}</div>
          <div className="badge-container">
            {product?.choice === true && <span className="conscious-badge">Conscious choice</span>}
            {product?.new === true && <span className="new-badge">신상품</span>}
          </div>
          <Form.Select aria-label="사이즈 선택">
            <option>사이즈 선택</option>
            {product?.size?.map((size, index) => (
              <option key={index} value={size}>{size}</option>
            ))}
          </Form.Select>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductDetail