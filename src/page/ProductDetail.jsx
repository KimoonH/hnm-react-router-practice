import { useEffect, useState } from 'react'
import { Container, Row, Col, Form } from "react-bootstrap";
import { useParams } from "react-router-dom"

const ProductDetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getProductDetail = async () => {
    setLoading(true);
    setError(null);
    try {
      let url = `https://my-json-server.typicode.com/KimoonH/hnm-react-router-practice/products/${id}`
      let response = await fetch(url);

      if (!response.ok) {
        throw new Error('상품 상세 정보를 불러오는데 실패했습니다.');
      }

      let data = await response.json();
      setProduct(data);
    } catch (error) {
      console.error("상품 상세 정보 로딩 실패:", error);
      setError(error.message || '알 수 없는 오류가 발생했습니다.');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getProductDetail();
  }, [id])

  if (loading) {
    return (
      <Container>
        <div className="loading-container">
          <div className="spinner"></div>
          <p>상품 정보를 불러오는 중...</p>
        </div>
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <div className="error-container">
          <div className="error-content">
            <div className="error-icon">⚠️</div>
            <h3 className="error-title">오류가 발생했습니다</h3>
            <p className="error-message">{error}</p>
            <button className="retry-button" onClick={getProductDetail}>
              다시 시도
            </button>
          </div>
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <Row>
        <Col xs={12} md={6} className="product-img">
          <img src={product?.img} alt={product?.title || "상품 이미지"} />
        </Col>
        <Col xs={12} md={6} className="product-detail-info">
          <h2>{product?.title}</h2>
          <div className="price">₩{product?.price?.toLocaleString()}</div>
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