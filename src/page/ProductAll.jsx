import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductCard from "../components/ProductCard";
import { Col, Container, Row } from "react-bootstrap";

const ProductAll = ({ searchQuery }) => {
    const [productList, setProductList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const getProducts = async () => {
        setLoading(true);
        setError(null);
        try {
            let url = `https://my-json-server.typicode.com/KimoonH/hnm-react-router-practice/products`
            let response = await fetch(url);

            if (!response.ok) {
                throw new Error('상품 정보를 불러오는데 실패했습니다.');
            }

            let data = await response.json();
            setProductList(data);
        } catch (error) {
            console.error("상품 로딩 실패:", error);
            setError(error.message || '알 수 없는 오류가 발생했습니다.');
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getProducts();
    }, [])

    const filteredProducts = productList.filter((product) => {
        return product.title.toLowerCase().includes(searchQuery.toLowerCase());
    });

    if (loading) {
        return (
            <Container>
                <div className="loading-container">
                    <div className="spinner"></div>
                    <p>상품을 불러오는 중...</p>
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
                        <button className="retry-button" onClick={getProducts}>
                            다시 시도
                        </button>
                    </div>
                </div>
            </Container>
        );
    }

    return (
        <>
            <Container>
                {filteredProducts.length === 0 ? (
                    <div style={{
                        textAlign: 'center',
                        padding: '60px 20px',
                        fontSize: '18px',
                        color: '#666'
                    }}>
                        <p>검색하신 상품을 찾을 수 없습니다.</p>
                        <p style={{ fontSize: '14px', marginTop: '10px' }}>
                            다른 검색어로 시도해보세요.
                        </p>
                    </div>
                ) : (
                    <Row className="justify-content-center">
                    {filteredProducts.map(menu => (
                        <Col xs={10} sm={6} md={4} lg={3} key={menu.id}>
                            <ProductCard item={menu} />
                        </Col>
                    ))}
                    </Row>
                )}
            </Container>
        </>
  )
}

export default ProductAll