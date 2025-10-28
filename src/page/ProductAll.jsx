import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductCard from "../components/ProductCard";
import { Col, Container, Row } from "react-bootstrap";

const ProductAll = () => {
    const [productList, setProductList] = useState([]);
    const getProducts = async () => {
        let url = `http://localhost:5000/products`
        let response = await fetch(url);
        let data = await response.json();
        setProductList(data);
    }
    useEffect(() => {
        getProducts();
    }, [])

    return (
        <>
            <Container>  
                <Row>
                {productList.map(menu => (
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