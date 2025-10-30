import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductCard from "../components/ProductCard";
import { Col, Container, Row } from "react-bootstrap";

const ProductAll = ({ searchQuery }) => {
    const [productList, setProductList] = useState([]);
    const getProducts = async () => {
        let url = `https://my-json-server.typicode.com/KimmonH/hnm-react-router-practice/products`
        let response = await fetch(url);
        let data = await response.json();
        setProductList(data);
    }
    useEffect(() => {
        getProducts();
    }, [])

    const filteredProducts = productList.filter((product) => {
        return product.title.toLowerCase().includes(searchQuery.toLowerCase());
    });

    return (
        <>
            <Container>
                <Row>
                {filteredProducts.map(menu => (
                    <Col xs={12} sm={6} md={4} lg={3} key={menu.id}>
                        <ProductCard item={menu} />
                    </Col>
                ))}
                </Row>
            </Container>
        </>
  )
}

export default ProductAll